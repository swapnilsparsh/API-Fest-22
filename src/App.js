import React from "react";
import { Routes, Route } from "react-router-dom";
import Cards from "./components/Cards";
import SignIn from "./components/Form/SignIn/SignIn";
import SignUp from "./components/Form/SignUp/SignUp";
import HomePage from "./components/Homepage";
import "./styling/App.css";


const App = () => {
  return (
    <div className="app">
      <Routes>
       <Route exact path="/" element={<HomePage />} />
      <Route exact path="/card" element={<Cards />} />
      <Route exact path="/signIn" element={<SignIn />} />
      <Route exact path="/signUp" element={<SignUp />} />
      </Routes>
    </div>
  );
};

export default App;
