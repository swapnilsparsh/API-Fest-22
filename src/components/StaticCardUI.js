import React from "react";
import "../styling/StaticCard.css";

const StaticCardUI = (props) => {
  return (
    <div className="card-container">
      <article className="card">
        <div className="thumb">
         <img  className="card_image" src={props.image} alt="" />
        </div>
          <div className="infos">
           <h2 className="title">{props.title}</h2>
        <p className="txt">{props.info}</p>
    </div>
</article>
    </div>
  );
};

export default StaticCardUI;

