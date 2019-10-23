import '../scss/main.scss';
import weatherData from './api/weatherData';

const init = async () => {
  console.log(await weatherData.current('london'));
};

init();