const fetchWeatherData = async (cityName) => {
  const API_KEY = '824cd72f73db619e1d3cb7ee720096c8';
  const BASE_ENDPOINT = 'https://api.openweathermap.org/data/2.5/weather';


  try {
    const response = await fetch(
      `${BASE_ENDPOINT}?q=${cityName}&appid=${API_KEY}`,
      { mode: 'cors' },
    );
    const weatherData = await response.json();

    if (`${weatherData.cod}` === '200') return weatherData;
    return false;
  } catch (error) {
    return error;
  }
};

export default fetchWeatherData;
