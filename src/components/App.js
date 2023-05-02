import React, { Component } from 'react';
import Header from './Header';
import './../styles/App.css';
import RangoList from './RangoList';
import logo from './../logo.svg';
import CreateRangos from './CreateRango';
import { Route, Routes } from 'react-router-dom';
import halo from '../styles/halo.jpg';

const App = () => {
  return (
    <div  style={{ backgroundImage: `url(${halo})` }} >
      <Header />
      <div >
        <Routes>
          <Route path="/" element={<RangoList/>} />
          <Route
            path="/create"
            element={<CreateRangos/>}
          />
        </Routes>
      </div>
    </div>
  );
};

export default App;