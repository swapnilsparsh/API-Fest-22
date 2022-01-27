import React from 'react';
import {  Routes, Route } from 'react-router-dom'
import Explore from './components/Explore'
// import Popularites from './components/Popularites'
import Api from './api/apis'
import './styling/App.css'
import Header from './components/Header.jsx';

const App = () => {
  return (
  <div className="app">
    <Routes>
      <Route exact path="/ex" element={<Explore />} />
      <Route exact path="/po" element={<Api />} />
      <Route exact path="/header" element={<Header />} />


    </Routes>
  </div>
  );
};

export default App;
