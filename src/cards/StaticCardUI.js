import React from "react";
import "./StaticCard.css";

const StaticCardUI = (props) => {
  return (
    <div className="card-container">
      <div className="image-container">
        <img src={props.image} alt="Image" />
      </div>
      <div className="card-content">
        <div className="card-title">
          <h3>{props.title}</h3>
        </div>
        <div className="card-body">
          <p>{props.info}</p>
        </div>
      </div>

      <div className="card-button">
        <a> Join Now</a>
      </div>
    </div>
  );
};

export default StaticCardUI;
