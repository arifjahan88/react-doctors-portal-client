import React from "react";
import img from "../../../assets/images/treatment.png";
import PrimaryButton from "../../../Components/PrimaryButton/PrimaryButton";

const OurTerms = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 lg:p-24 justify-center items-center">
      <div>
        <img className="w-3/4 mx-auto rounded-lg" src={img} alt="" />
      </div>
      <div className="text-center lg:text-left">
        <h2 className="text-accent text-6xl font-bold">
          Exceptional Dental Care, on Your Terms
        </h2>
        <p className="my-5">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsumis that it has a more-or-less normal distribution of
          letters,as opposed to using 'Content here, content here', making it
          look like readable English. Many desktop publishing packages and web
          page
        </p>
        <PrimaryButton>Get Started</PrimaryButton>
      </div>
    </div>
  );
};

export default OurTerms;
