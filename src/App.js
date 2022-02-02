import React from "react";
import { Routes, Route } from "react-router-dom";
import Cards from "./components/Cards";
import HomePage from "./components/Homepage";
import Register from "./components/Register";
import Login from "./components/Login";
import "./styling/App.css";
import Search from "./components/Search";


const App = () => {
  return (
    <div className="app">
      <Routes>
       <Route exact path="/" element={<HomePage />} />
      <Route exact path="/explore" element={<Cards />} />
      <Route exact path="/reg" element={<Register/>} />
      <Route exact path="/login" element={<Login/>} />
      </Routes>
    </div>
  );
};

export default App;
