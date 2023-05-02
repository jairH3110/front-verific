import React, { Component } from 'react';
import Header from './Header';
import './../styles/App.css';
import RangoList from './RangoList';
import logo from './../logo.svg';
import CreateRangos from './CreateRango';
import { Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <div className="center w85">
      <Header />
      <div className="ph3 pv1 background-gray">
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