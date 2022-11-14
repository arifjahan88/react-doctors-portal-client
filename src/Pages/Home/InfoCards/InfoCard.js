import React from "react";

const InfoCard = ({ data }) => {
  return (
    <div>
      <div className={`card md:card-side ${data.bgClass} shadow-xl px-7 p-2`}>
        <figure>
          <img src={data.logo} alt="Movie" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{data.title}</h2>
          <p>{data.descriptions}</p>
        </div>
      </div>
    </div>
  );
};

export default InfoCard;
