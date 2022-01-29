import React from 'react';
import '../styling/Popularity.css';
import arrow from '../images/Arrow.png'

const Popularity = ({ imgCeleb, type, name}) => (
  <div className="celeb">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <div className="cont">
              <img className="pop-img" src={imgCeleb} alt="" />
              <a href=" ">{type}</a>
              <p className="names">{name}</p>
              <div className="bottom-info">
              <p className="info">More Info </p>
              <img className="arrow" src={arrow} alt="" />
              </div>
        </div>
        </div>
);

export default Popularity;