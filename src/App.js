import React from "react";
import { Routes, Route } from "react-router-dom";
import Explore from "./components/Explore";
// import Popularites from './components/Popularites'
// import Api from "./api/apis";
import "./styling/App.css";
import Header from "./components/Header.jsx";
import Cards from "./cards/Cards";
import StaticCard from "./cards/StaticCard";

import Footer from "./components/Footer.jsx";
import Blog from "./components/Blog";
const App = () => {
  return (
    <div className="app">
      <Routes>
        <Route exact path="/ex" element={<Explore />} />
        {/* <Route exact path="/po" element={<Api />} /> */}
        <Route exact path="/header" element={<Header />} />
        <Route exact path="/footer" element={<Footer />} />
        <Route exact path="/card" element={<Cards />} />
        <Route exact path="/homecard" element={<StaticCard />} />
        <Route exact path="/blog" element={<Blog />} />
      </Routes>
    </div>
  );
};

export default App;
