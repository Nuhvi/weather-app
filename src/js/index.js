import '../scss/main.scss';
import { format } from 'date-fns';
import weatherData from './api/weatherData.js';
import UI from './ui/ui.js';
import clouds from '../images/clouds.jpg';

UI.render();

document.getElementById('background').src = clouds;

const init = async () => {
  const dt = (await weatherData.current('new york')).dateTime;
  console.log(
    format(new Date(dt), 'h:m a — iiii, dd MMM `yy'),
  );
};

init();
