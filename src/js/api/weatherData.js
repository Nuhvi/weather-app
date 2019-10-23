import fetchWeatherAPI from './fetch-weather-api.js';

const weatherData = (() => {
  const current = async (cityName) => {
    const data = await fetchWeatherAPI({ cityName });

    return {
      weather: data.weather[0].main,
    };
  };

  return {
    current,
  };
})();

export default weatherData;