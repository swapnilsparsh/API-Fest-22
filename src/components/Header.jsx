import React from 'react';
import '../styling/Header.css';
import dribble from '../images/dribble.png';
import side from '../images/Header-lower.png';
import 'font-awesome/css/font-awesome.min.css';
import TiltPhaseSix from './TiltPhase';



const Header = () => {
  return <>
      <TiltPhaseSix>
      <div className="header">
          <div className="header_appbar" id="head">
              
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
