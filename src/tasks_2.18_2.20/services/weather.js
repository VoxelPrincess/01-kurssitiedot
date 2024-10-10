import axios from "axios";
const apiKey = import.meta.env.VITE_WEATHER_KEY;

const getWeather = (capital) => {
  return axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${capital}&appid=${apiKey}`).then((response) => {
    return response.data;
  });
};

export default getWeather;
