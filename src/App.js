import React from "react";
import { Routes, Route } from "react-router-dom";
import Cards from "./components/Cards";
import Check from './components/Check'
import HomePage from "./components/Homepage";
import "./styling/App.css";


const App = () => {
  return (
    <div className="app">
      <Routes>
       <Route exact path="/" element={<HomePage />} />
       <Route exact path="/card" element={<Cards />} />
       <Route exact path="/ch" element={<Check/>} />
      </Routes>
    </div>
  );
};

export default App;
