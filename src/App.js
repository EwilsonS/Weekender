import React from 'react';
import './App.css';
import Nav from './components/Nav'
import Weather from './components/Weather'
import Lotto from './components/Lotto'
import Cocktail from './components/Cocktail.jsx'
import Events from './components/Events.jsx'

function App() {
  return (
    <div className="App">
      <Nav/>

        <div className="main-top">
          <div className="weather-div">
            <Weather />
          </div>
          <div className="lotto-div">
            <Lotto />
          </div>
        </div>
        <div className="main-bottom">
          <div className="cocktail-div">
            <Cocktail/>
          </div>
          <div className="events-div">
            <Events />
          </div>

        </div>

    </div>
  );
}

export default App;
