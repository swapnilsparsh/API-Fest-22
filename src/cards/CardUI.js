import React from "react";
import "./card-style.css";

const Card = ({ title, info, link, rating, image }) => {
  const img1 = "https://codeforcause.org/static/home/codeforcause.svg";

  return (
    <div className="container-fluid">
      <div className="card card-body text-center">
        <div className="overflow">
          <img src={image} alt="Image1" className="card-img-top" />
        </div>
        <div card-body text-dark>
          <h4 className="card-title">{title}</h4>
          <p className="card-text text-secondary">{info}</p>
          <a href={link} className="btn btn-outline-success">
            Join Now
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
