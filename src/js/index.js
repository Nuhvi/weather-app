import '../scss/main.scss';
import weatherData from './api/weatherData.js';
import DOM from './ui/dom.js';
import geolocation from './api/geolocation.js';

const init = async () => {
  const city = await geolocation.clientData().city;
  const data = (await weatherData.current(city));
  DOM.render(data);
};

init();
