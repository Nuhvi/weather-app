import '../scss/main.scss';
import { format } from 'date-fns';
import weatherData from './api/weatherData.js';
import UI from './ui/ui.js';
import clouds from '../images/clouds.jpg';

UI.render();

document.getElementById('background').src = clouds;

const init = async () => {
  const data = (await weatherData.current('istanbul'));
  document.getElementById('wind').innerHTML = Math.round(data.wind);
  document.getElementById('icon').classList.add('wi-day-cloudy-windy');
  document.getElementById('humidity').innerHTML = data.humidity;
  document.getElementById('clouds').innerHTML = data.clouds;
  document.getElementById('tempC').innerHTML = Math.round(data.tempC);
  document.getElementById('tempF').innerHTML = Math.round(data.tempF);
  document.getElementById('description').innerHTML = data.description;
  document.getElementById('city-name').innerHTML = data.city;
  document.getElementById('country').innerHTML = data.country;
  document.getElementById('date-time').innerHTML = format(new Date(data.dateTime), 'h:m a — iiii, dd MMM `yy');
};

init();
