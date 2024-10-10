import React, { useState, useEffect } from "react";
import getWeather from "../services/weather";

const Weather = ({ capital }) => {
  const [temp, setTemp] = useState(null);
  const [weatherEmoji, setWeatherEmoji] = useState(null);
  const [weatherDescription, setWeatherDescription] = useState(null);
  const [windSpeed, setWindSpeed] = useState(null);
  useEffect(() => {
    getWeather(capital)
      .then((data) => {
        setTemp((data.main.temp - 273.15).toFixed(1));
        setWeatherEmoji(`https://openweathermap.org/img/wn/${data.weather[0].icon}.png`);
        setWeatherDescription(
          data.weather[0].description.charAt(0).toUpperCase() + data.weather[0].description.slice(1)
        );
        setWindSpeed(data.wind.speed);
      })
      .catch((error) => {
        console.log("Error fetching data:", error);
      });
  }, [capital]);
  return (
    <div>
      <h3>Current Weather in {capital}</h3>
      <p>Temperature: {temp}°C</p>
      <img src={weatherEmoji} alt="weather icon" />
      <p>{weatherDescription}</p>
      <p>wind {windSpeed} m/s</p>
    </div>
  );
};
export default Weather;
