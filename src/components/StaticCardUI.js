import React from "react";
import "../styling/StaticCard.css";

const StaticCardUI = (props) => {
  return (
    <div className="card-container">
      <img className="check" src={props.image} alt=" " />

      <div className="card-content">
        <h3 className="card-title">{props.title}</h3>

        <p className="paragraph">{props.info}</p>
      </div>
      <a href=' ' className="JoinButton"> Join Now</a>
    </div>
  );
};

export default StaticCardUI;
