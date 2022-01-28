import React from "react";
import { Routes, Route } from "react-router-dom";
import Explore from "./components/Explore";
// import Popularites from './components/Popularites'
// import Api from "./api/apis";
import "./styling/App.css";
import Header from "./components/Header";
import Cards from "./cards/Cards";
const App = () => {
  return (
    <div className="app">
      <Routes>
        <Route exact path="/ex" element={<Explore />} />
        {/* <Route exact path="/po" element={<Api />} /> */}
        <Route exact path="/header" element={<Header />} />
        <Route exact path="/card" element={<Cards />} />
      </Routes>
    </div>
  );
};

export default App;
