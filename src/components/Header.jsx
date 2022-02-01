import React from 'react';
import '../styling/Header.css';
import dribble from '../images/dribble.png';
import side from '../images/Header-lower.png';
import 'font-awesome/css/font-awesome.min.css';
import TiltPhaseSix from './TiltPhase';
import community from '../images/Community.png'



const Header = () => {
  return <>
      <TiltPhaseSix>
      <div className="header" id="head">
              <div className="header_appbar">
              <img  className ="header_logo" src={community} alt="LOGO" />
              <div className="header_nav">
                  <h4 className="header_nav_points">
                      <a className='homie' href="/"> Home </a>
                  </h4>
                   <h4 className="header_nav_points">
                      Communities
                      <div className="header_dropdown-content">
                          <a href="/explore ">Tech</a>
                          <a href="/explore ">Marketing</a>
                          <a href="/explore ">Investing</a>
                          <a href="/explore ">Poetry</a>
                          <a href="/explore ">Health</a>
                          <a href="/explore ">E-Commerce</a>
                          <a href="/explore ">Entertainment</a>
                          <a href="/explore ">Crypto</a>
                      </div>
                  </h4>
                   <h4 className="header_nav_points">
                      <a style={{background:'transparent'}} target="blank" href="mailto:arezona.lucky55@gmail.com"> ContactUs  </a>
                  </h4>
              </div>
              <div className="header_sign_in_up" />
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
