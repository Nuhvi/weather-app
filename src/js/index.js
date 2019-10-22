import '../scss/main.scss';
import fetchWeatherData from './api/fetch-weather-data.js';

const data = fetchWeatherData('london');
console.log(data);
