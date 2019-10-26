import '../scss/main.scss';
import weatherData from './api/weatherData.js';
import DOM from './ui/dom.js';

const init = async () => {
  const data = (await weatherData.current('istanbul'));
  DOM.render(data);
};

init();
