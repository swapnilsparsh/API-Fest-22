import React from 'react';
import '../styling/Footer.css';

const Footer = () => {
  return <div>
   <div className="footer_section">
      <div className="footer_sub_section">
        <div className="footer_points">
          <p className="footer_point">
            <a href="#head">
              Home
            </a>
          </p>
          <p className="footer_point" >
            <a  target="blank" href="https://github.com/swapnilsparsh/API-Fest-22">
              Github
            </a>
          </p>
          <p className="footer_point">
            <a  target="blank" href="mailto:arezona.lucky55@gmail.com">
              Contact Us
            </a>
          </p>
        </div>
        <br />
        <hr className="footer_line" />
        <p className="footer_end_point">
          © Copyright 2022 Community-Hunter, Inc. All rights reserved
        </p>
      </div>
      <p className="footer_end_points">

        </p>
    </div>
  </div>;
};

export default Footer;
