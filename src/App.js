import React from "react";
import { Routes, Route } from "react-router-dom";
import Explore from "./components/Explore";
// import Popularites from './components/Popularites'
// import Api from "./api/apis";
import "./styling/App.css";
import Header from "./components/Header.jsx";
import Cards from "./cards/Cards";
import Blog from "./Blog";
import Login from "./components/Login";
import Auth from "./components/Auth";

const App = () => {
  return (
    <div className="app">
      <Routes>
        <Route exact path="/ex" element={<Explore />} />
        {/* <Route exact path="/po" element={<Api />} /> */}
        <Route exact path="/header" element={<Header />} />
        <Route exact path="/card" element={<Cards />} />
        <Route exact path="/blog" element={<Blog />}/>
        <Route exact path="/login" element={<Login />}/>
         <Route exact path="/auth" element={<Auth />}/>
    
      </Routes>
    </div>
  );
};

export default App;
