import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useEffect, useState } from "react";

const CheckOutForm = ({ booking }) => {
  const [clientSecret, setClientSecret] = useState("");
  const [carderror, setcarderror] = useState("");
  const [success, setSuccess] = useState("");
  const [transitionid, setTransitionId] = useState("");
  const [processing, setProcessing] = useState(false);
  const stripe = useStripe();
  const elements = useElements();
  const { price, email, patient, _id } = booking;

  useEffect(() => {
    // Create PaymentIntent as soon as the page loads
    fetch("http://localhost:5000/create-payment-intent", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        authorization: `bearer ${localStorage.getItem("AccessToken")}`,
      },
      body: JSON.stringify({ price }),
    })
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret));
  }, [price]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);
    if (card == null) {
      return;
    }

    const { error } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      console.log(error);
      setcarderror(error.message);
    } else {
      setcarderror("");
    }

    setSuccess("");
    setProcessing(true);

    const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: card,
        billing_details: {
          name: patient,
          email: email,
        },
      },
    });

    if (confirmError) {
      setcarderror(confirmError.message);
      return;
    }
    console.log("paymentIntent", paymentIntent);
    if (paymentIntent.status === "succeeded") {
      //store payment Data
      const payment = {
        price,
        transitionid: paymentIntent.id,
        email,
        bookingId: _id,
      };
      fetch("http://localhost:5000/payments", {
        method: "POST",
        headers: {
          "content-type": "application/json",
          authorization: `bearer ${localStorage.getItem("AccessToken")}`,
        },
        body: JSON.stringify(payment),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.insertedId) {
            setSuccess("Congrats, Your Payment SuccessFull.");
            setTransitionId(paymentIntent.id);
          }
        });
    }
    setProcessing(false);
  };

  return (
    <div>
      <form className="w-96 my-10" onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <button
          className="btn btn-outline btn-sm mt-4 btn-primary"
          type="submit"
          disabled={!stripe || !clientSecret || processing}
        >
          Pay
        </button>
      </form>
      <p className="text-sm text-red-600 mt-2">{carderror}</p>
      {success && (
        <div className="border-4 text-center p-4 rounded-lg w-1/2 mx-auto">
          <p className="text-green-500">{success}</p>
          <p>
            Your Transaction Id is : <span className="font-bold text-violet-500">{transitionid}</span>
          </p>
        </div>
      )}
    </div>
  );
};

export default CheckOutForm;
