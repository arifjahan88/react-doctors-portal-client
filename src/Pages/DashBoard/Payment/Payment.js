import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import { useLoaderData, useNavigation } from "react-router-dom";
import Loading from "../../Shared/Loading/Loading";
import CheckOutForm from "./CheckOutForm";

const stripePromise = loadStripe("pk_test_51M70eKJMWjbKu3ZgmyHXa2OKbuT03G31WsEQQSJcsGjnU72JpfKTfEhgeq7Ll75mYt16huKj8xxPbKIxsyOTVy7900lBZ90fvk");

const Payment = () => {
  const navigation = useNavigation();
  const booking = useLoaderData();
  if (navigation.state === "loading") {
    return <Loading></Loading>;
  }
  return (
    <div>
      <h2 className="text-3xl font-semibold">Payment for {booking.treatment}</h2>
      <p className="text-xl">
        Please Pay <strong>${booking.price}</strong> for your appointment on <strong>{booking.slot}</strong>
      </p>
      <div>
        <Elements stripe={stripePromise}>
          <CheckOutForm booking={booking}></CheckOutForm>
        </Elements>
      </div>
    </div>
  );
};

export default Payment;
