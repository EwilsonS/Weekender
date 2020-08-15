import React from "react";
import "./weather.css";
import axios from "axios";

class Weather extends React.Component {
  state = {
    weatherLoaded: false,
    forecast: [],
    city: undefined,
  };

  handleInputChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  getWeatherData = (city) => {
    const apiKey = `75fb70b17ec4c5baa3c8c74faabf1ad3`
    const apiCall = `api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}`;
    let forecast;
    axios.get(apiCall).then((res) => {
      forecast = res.data.weatherdata.forecast;
      this.setState({
        weatherLoaded: true,
        forecast: forecast,
      });
    });

    console.log("HERE::::", this.state)
  };

  render() {
    return (
      <div className="weather">
        <div>
          <form>
            <input
              type="text"
              placeholder="city"
              value={this.state.city}
              onChange={this.handleInputChange}
            />
            <button type="submit" onClick={this.getWeatherData(this.state.city)}>
              Send
            </button>
          </form>
        </div>
        {this.state.weatherLoaded === true ? (
          <div>{this.state.forecast}</div>
        ) : (
          <div>no data</div>
        )}
      </div>
    );
  }
}

export default Weather;
