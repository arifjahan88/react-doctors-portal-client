import React from "react";
import clock from "../../../assets/icons/clock.svg";
import phone from "../../../assets/icons/phone.svg";
import marker from "../../../assets/icons/marker.svg";
import InfoCard from "./InfoCard";

const InfoCards = () => {
  const cardData = [
    {
      id: 1,
      title: "Opening Hours",
      descriptions: "Opening everyDay 9.00 to 5.00",
      logo: clock,
      bgClass: "bg-gradient-to-r from-primary to-secondary",
    },
    {
      id: 2,
      title: "Visit our location",
      descriptions: "Opening everyDay 9.00 to 5.00",
      logo: marker,
      bgClass: "bg-accent",
    },
    {
      id: 3,
      title: "Contact Us Now",
      descriptions: "Opening everyDay 9.00 to 5.00",
      logo: phone,
      bgClass: "bg-gradient-to-r from-primary to-secondary",
    },
  ];
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8 mx-12 text-white">
      {cardData.map((data) => (
        <InfoCard key={data.id} data={data}></InfoCard>
      ))}
    </div>
  );
};

export default InfoCards;
