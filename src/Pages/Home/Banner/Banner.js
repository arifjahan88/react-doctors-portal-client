import React from "react";
import { Link } from "react-router-dom";
import image from "../../../assets/images/banner.jpg";
import PrimaryButton from "../../../Components/PrimaryButton/PrimaryButton";

const Banner = () => {
  return (
    <div>
      <div className="hero">
        <div className="hero-content flex-col lg:flex-row-reverse p-10">
          <img
            src={image}
            className="w-1/2 rounded-2xl shadow-2xl opacity-80"
            alt=""
          />
          <div>
            <h1 className="text-5xl font-bold">Appointment Now!</h1>
            <p className="py-6">
              This is a website where a patient can book a doctor's appointment
              for his disease at home. So don't be late. Hurry Up!
            </p>
            <Link to="/appointment">
              <PrimaryButton>Get Started</PrimaryButton>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
