import React from "react";

const InfoCard = ({ data }) => {
  return (
    <div>
      <div className={`card card-side ${data.bgClass} shadow-xl px-7`}>
        <figure>
          <img src={data.logo} alt="Movie" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{data.title}</h2>
          <p>{data.descriptions}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Watch</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoCard;
