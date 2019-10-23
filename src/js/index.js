import '../scss/main.scss';
import weatherData from './api/weatherData';
import UI from './ui/ui.js';

UI.render();

const init = async () => {
  console.log(await weatherData.current('london'));
};

init();