import '../scss/main.scss';
import fetchWeatherData from './api/fetch-weather-data.js';

const query = async () => {
  const data = await fetchWeatherData({
    cityName: 'london',
    dataType: 'forecast',
    unitsFormat: 'imperial',
  });
  console.log(data);
};

query();