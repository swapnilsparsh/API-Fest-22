import React from "react";
import { Routes, Route } from "react-router-dom";
import Cards from "./components/Cards";
import HomePage from "./components/Homepage";
import "./styling/App.css";


const App = () => {
  return (
    <div className="app">
      <Routes>
       <Route exact path="/" element={<HomePage />} />
      <Route exact path="/card" element={<Cards />} />
      </Routes>
    </div>
  );
};

export default App;
