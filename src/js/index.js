import '../scss/main.scss';
import weatherData from './api/weatherData.js';
import DOM from './ui/dom.js';
import geolocation from './api/geolocation.js';

const update = async (city) => {
  const data = await weatherData.current(city);
  if (data) DOM.render(data);
};

const init = async () => {
  const clientCity = await geolocation.clientData();
  if (clientCity) {
    update(clientCity);
  } else update('barcelona');
};

const form = document.getElementById('search-city');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const city = form.elements[1].value;
  update(city);
});

init();
