import React from 'react';
import '../styling/Header.css';
import dribble from '../images/dribble.png';
import side from '../images/Header-lower.png';
import TiltPhaseSix from './TiltPhase';

const Header = () => {
  return <>
      <TiltPhaseSix>
      <div className="header">
          <div className="appbar">
              <img src="" alt="LOGO" />
              <div className="nav-head">
                  <h4 className="nav_points">
                      Home
                      <div className="dropdown-content">
                          <a href=" ">Famous Communities</a>
                          <a href=" ">Popular Searches</a>
                      </div>
                  </h4>
                   <h4 className="nav_points">
                      Communities
                      <div className="dropdown-content">
                          <a href=" ">Tech</a>
                          <a href=" ">Commerce</a>
                          <a href=" ">Arts</a>
                      </div>
                  </h4>
                   <h4 className="nav_points">
                      ContactUs
                      <div className="dropdown-content">
                          <a href=" ">1</a>
                          <a href=" ">2</a>
                      </div>
                  </h4>
              </div>
              <div className="sign_in_up">
                  <button className="dropbtn"><i class="fa fa-user-o fa-2x" style={{background: "transparent"}}></i></button>
                  <div className="dropdown-content">
                      <a href=" ">Log In</a>
                      <a href=" ">Register</a>
                  </div>
              </div>
          </div>
          <div className="header-content">
              <div className="written_content">
                  <h1 className="main_heading">
                      Want to go quickly, go alone. If you want to go far, <span className="middle" >go together </span>.
                  </h1>
                  <hr className="mainline" />
                  <div className="sub">
                    <hr className="line" />
                    <h4 className="sub_heading">
                        Alone, we can do so little; together, we can do so much. <span>Join Now</span>
                    </h4>
                  </div>
              </div>
              <img className="main_img" src={dribble} alt="" />
          </div>
          <img  className="side_img"src={side} alt="" />
      </div>
      </TiltPhaseSix>
  </>;
};

export default Header;
