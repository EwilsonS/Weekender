import React from "react";
import "./weather.css";
import axios from "axios";

class Weather extends React.Component {
  state = {
    weatherLoaded: false,
    forecast: [],
    city: undefined,
    state: undefined,
  };

  handleInputChange = (e) => {
    // e.preventDefault()
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  getWeatherData = async (city, state) => {
    const apiKey = `f7593fcfce6d212b9291608cf4820b91`
    const apiCall = `https://api.openweathermap.org/data/2.5/forecast?q=${city},${state}&appid=${apiKey}`;
    await axios.get(apiCall)
    // console.log(res)
    // res.data.list[0].main.feels_like
    .then(res => {
      let curerentTemp = res.data.list[0].main.feels_like
      curerentTemp = (curerentTemp - 273.15) * (9/5) + 32
      this.setState({
        weatherLoaded: true,
        forecast: curerentTemp,
      });
    }).catch(err => {
      console.log("ERRR:::", err, city)
    });

    console.log("HERE::::", this.state)
    return
  };

  render() {
    return (
      <div className="weather">
        <div>
          <form onSubmit={() => this.getWeatherData(this.state.city, this.state.state)}>
            <input
              type="text"
              placeholder="city"
              name="city"
              value={this.state.city}
              onChange={this.handleInputChange}
            />
             <input
              type="text"
              placeholder="state"
              name="state"
              value={this.state.state}
              onChange={this.handleInputChange}
            />
            <button 
              type="submit" 
              value="send"
              >
              Send
            </button>
          </form>
        </div>
        {this.state.weatherLoaded === true ? (
          <div>Feels like {this.state.forecast} degrees in {this.state.city}</div>
        ) : (
          <div>no data</div>
        )}
      </div>
    );
  }
}

export default Weather;
