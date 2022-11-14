import React from "react";
import Banner from "../Banner/Banner";
import InfoCards from "../InfoCards/InfoCards";
import MakeApointment from "../MakeApointment/MakeApointment";
import OurTerms from "../OurTerms/OurTerms";
import Services from "../Services/Services";
import TestiMonial from "../Testimonial/TestiMonial";

const Home = () => {
  return (
    <div className="lg:mx-24">
      <Banner></Banner>
      <InfoCards></InfoCards>
      <Services></Services>
      <OurTerms></OurTerms>
      <MakeApointment></MakeApointment>
      <TestiMonial></TestiMonial>
    </div>
  );
};

export default Home;
