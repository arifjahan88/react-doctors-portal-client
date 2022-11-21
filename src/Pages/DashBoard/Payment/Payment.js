import React from "react";
import { useLoaderData } from "react-router-dom";

const Payment = () => {
  const booking = useLoaderData();
  return (
    <div>
      <h2 className="text-3xl font-semibold">Payment for {booking.treatment}</h2>
      <p className="text-xl">
        Please Pay <strong>${booking.price}</strong> for your appointment on <strong>{booking.slot}</strong>
      </p>
    </div>
  );
};

export default Payment;
