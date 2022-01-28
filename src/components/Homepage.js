import React from 'react';
import Explore from "./Explore";
import Popularites from './Popularites'
import Header from "./Header";
import StaticCard from "./StaticCard";
import Footer from "./Footer.jsx";
import Blog from "./Blog";

const Homepage = () => {
  return (
  <div className="homepage"> 
    <Header />
    <StaticCard />
    <Explore />
    <Popularites />
    <Blog />
    <Footer />
  </div>
  );
};

export default Homepage;
