import React from 'react';
import '../styling/Header.css';
import dribble from '../images/dribble.png';
import side from '../images/Header-lower.png';
import community from '../images/Community.png';
import 'font-awesome/css/font-awesome.min.css';
import TiltPhaseSix from './TiltPhase';



const Header = () => {
  return <>
      <TiltPhaseSix>
      <div className="header">
          <div className="header_appbar">
              <img  className ="header_logo" src={community} alt="LOGO" />
              <div className="header_nav">
                  <h4 className="header_nav_points">
                      Home
                      <div className="header_dropdown-content">
                          <a href=" ">Famous Communities</a>
                          <a href=" ">Popular Searches</a>
                      </div>
                  </h4>
                   <h4 className="header_nav_points">
                      Communities
                      <div className="header_dropdown-content">
                          <a href=" ">Tech</a>
                          <a href=" ">Commerce</a>
                          <a href=" ">Arts</a>
                      </div>
                  </h4>
                   <h4 className="header_nav_points">
                      ContactUs
                      <div className="header_dropdown-content">
                          <a href=" ">1</a>
                          <a href=" ">2</a>
                      </div>
                  </h4>
              </div>
              <div className="header_sign_in_up">
                  <button className="header_dropbtn"><i class="fa fa-user-o fa-2x" style={{background: "transparent"}}></i></button>
                  <div className="header_dropdown-content">
                      <a href=" ">Log In</a>
                      <a href=" ">Register</a>
                  </div>
              </div>
          </div>
          <div className="header_header-content">
              <div className="header_written_content">
                  <h1 className="header_main_heading">
                      Want to go quickly, go alone. If you want to go far, <span className="header_middle" >go together </span>.
                  </h1>
                  <hr className="header_mainline" />
                  <div className="header_sub">
                    <hr className="header_line" />
                    <h4 className="header_sub_heading">
                        Alone, we can do so little; together, we can do so much. <span>Join Now</span>
                    </h4>
                  </div>
              </div>
              <img className="header_main_img" src={dribble} alt="" />
          </div>
          <img  className="header_side_img"src={side} alt="" />
      </div>
      </TiltPhaseSix>
  </>;
};

export default Header;
