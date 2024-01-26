import "./style.css";

import clearIcon from "../src/assets/clear.png";
import cloudIcon from "../src/assets/cloud.png";
import rainIcon from "../src/assets/rain.png";
import windIcon from "../src/assets/wind.png";
import humidityIcon from "../src/assets/humidity.png";

import React, { useEffect, useState } from "react";

export function WeatherApp() {
  const [weatherData, setWeatherData] = useState({
    humidity: "",
    windSpeed: "",
    temperature: "",
  });

  const [weatherIcons, setWeatherIcons] = useState(clearIcon);

  let apiKey = {Add your api key here};

  useEffect(() => {
    const fetchData = async () => {
      let url = `https://api.openweathermap.org/data/2.5/weather?lat=19.8762&lon=75.3433&units=Metric&appid=${apiKey}`;
      let response = await fetch(url);
      let data = await response.json();

      // Update state with API data
      setWeatherData({
        humidity: data.main.humidity + "%",
        windSpeed: data.wind.speed + " km/h",
        temperature: data.main.temp + "°C",
      });

      // Icons on the basis of the data
      if (data.weather.icon === "01d" || data.weather.icon === "01n") {
        setWeatherIcons(clearIcon);
      } else if (data.weather.icon === "02d" || data.weather.icon === "02n") {
        setWeatherIcons(cloudIcon);
      } else if (data.weather.icon === "03d" || data.weather.icon === "03n") {
        setWeatherIcons(cloudIcon);
      } else if (data.weather.icon === "04d" || data.weather.icon === "04n") {
        setWeatherIcons(cloudIcon);
      } else if (data.weather.icon === "09d" || data.weather.icon === "09n") {
        setWeatherIcons(rainIcon);
      } else if (data.weather.icon === "10d" || data.weather.icon === "10n") {
        setWeatherIcons(rainIcon);
      } else if (data.weather.icon === "11d" || data.weather.icon === "11n") {
        setWeatherIcons(rainIcon);
      } else {
        setWeatherIcons(clearIcon);
      }
    };
    
    // Invoke the fetchData function when the component mounts
    fetchData();

  }, []);

  return (
    <div className="container">
      <div className="weather-image">
        <img src={weatherIcons} alt="" />
      </div>
      <div className="weather-temp">{weatherData.temperature}</div>
      <div className="weather-location">Aurangabad</div>
      <div className="data-container">
        <div className="element">
          <img src={humidityIcon} alt="" className="icon" />
          <div className="data">
            <div className="humidity-percentage">{weatherData.humidity}</div>
            <div className="text">Humidity</div>
          </div>
        </div>
        <div className="element">
          <img src={windIcon} alt="" className="icon" />
          <div className="data">
            <div className="wind-rate">{weatherData.windSpeed}</div>
            <div className="text">Wind Speed</div>
          </div>
        </div>
      </div>
    </div>
  );
}
