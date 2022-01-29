import React from 'react';
import '../styling/Footer.css';

const Footer = () => {
  return <div>
    <div className="footer_section">
      <div className="footer_sub_section">
        <div className="footer_points">
          <p className="footer_point">Home</p>
          <p className="footer_point">Help Us</p>
          <p className="footer_point">Contact Us</p>
        </div>
        <br />
        <hr className="footer_line" />
        <p className="footer_end_point">
          © Copyright 2022 CommunityHunter, Inc. All rights reserved
        </p>
      </div>
      <p className="footer_end_points">
         
        </p>
    </div>
  </div>;
};

export default Footer;
