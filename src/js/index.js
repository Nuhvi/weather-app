import '../scss/main.scss';
import fetchWeatherData from './api/fetch-weather-data.js';

const query = async () => {
  const data = await fetchWeatherData('london');
  console.log(data);
};

query();