import React from 'react';
import {  Routes, Route } from 'react-router-dom'
import Explore from './components/Explore'
// import Popularites from './components/Popularites'
import Api from './api/apis'
import './styling/App.css'

const App = () => {
  return (
  <div className="app">
    <Routes>
      <Route exact path="/ex" element={<Explore />} />
      <Route exact path="/po" element={<Api />} />
    </Routes>
  </div>
  );
};

export default App;
