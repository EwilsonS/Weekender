import React from 'react';
import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav'
import Weather from './components/Weather'
import Lotto from './components/Lotto'

function App() {
  return (
    <div className="App">
      <Nav/>
      <div className="weather-div">
        <Weather />
      </div>
      <div className="lotto-div">
        <Lotto />
      </div>
    </div>
  );
}

export default App;
