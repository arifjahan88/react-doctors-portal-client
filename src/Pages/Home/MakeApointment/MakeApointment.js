import React from "react";
import img from "../../../assets/images/doctor.png";
import appointment from "../../../assets/images/appointment.png";
import PrimaryButton from "../../../Components/PrimaryButton/PrimaryButton";
import { Link } from "react-router-dom";

const MakeApointment = () => {
  return (
    <section className="mt-32 rounded-lg" style={{ background: `url(${appointment})` }}>
      <div className="hero">
        <div className="hero-content p-0 flex-col lg:flex-row">
          <img alt="" src={img} className="rounded-lg shadow-2xl -mt-5 hidden lg:block" />
          <div className="text-white">
            <h4 className="font-bold text-primary my-3">Appointment</h4>
            <h1 className="text-5xl font-bold">Make an appointment Today</h1>
            <p className="py-6">
              It is a long established fact that a reader will be distracted by the readable content
              of a page when looking at its layout. The point of using Lorem Ipsumis that it has a
              more-or-less normal distribution of letters,as opposed to using 'Content here, content
              here', making it look like readable English. Many desktop publishing packages and web
              page
            </p>
            <Link to="/appointment">
              <PrimaryButton>Get Started</PrimaryButton>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MakeApointment;
