import fetchAPI from './fetch_api.js';

const weatherData = (() => {
  const API_KEY = '824cd72f73db619e1d3cb7ee720096c8';
  const BASE_ENDPOINT = 'https://api.openweathermap.org/data/2.5/';

  const getJson = async ({
    cityName,
    mode = 'weather',
    unitFormat = 'metric',
  }) => {
    const url = `${BASE_ENDPOINT}${mode}?q=${cityName}
                  &appid=${API_KEY}&units=${unitFormat}`;

    return fetchAPI(url);
  };

  const parseData = (jsonData) => ({
    city: jsonData.name,
    country: jsonData.sys.country,
    dateTime: Date(jsonData.dt),
    main: jsonData.weather[0].main,
    description: jsonData.weather[0].description,
    tempC: jsonData.main.temp,
    tempF: jsonData.main.temp / 33.8,
    wind: jsonData.wind.speed,
    humidity: jsonData.main.humidity,
    clouds: jsonData.clouds.all,
  });

  const current = async (cityName) => {
    const jsonData = await getJson({ cityName });

    return parseData(jsonData);
  };

  return {
    current,
  };
})();

export default weatherData;
