import { format } from 'date-fns';
import brokenCloudsImg from '../../images/clouds.jpg';
import sunnyImg from '../../images/sunny.jpg';
import clearImg from '../../images/clear.jpg';
import fewCloudsImg from '../../images/few-clouds.jpg';
import scatteredCloudsImg from '../../images/scattered-clouds.jpg';
import rainImg from '../../images/rain.jpg';
import lightRainImg from '../../images/light-rain.jpg';
import snowImg from '../../images/snow.jpg';
import mistImg from '../../images/mist.jpg';

const DOM = (() => {
  const background = document.getElementById('background');
  const cityName = document.getElementById('city-name');
  const country = document.getElementById('country');
  const dateTime = document.getElementById('date-time');
  const tempC = document.getElementById('tempC');
  const tempF = document.getElementById('tempF');
  const icon = document.getElementById('icon');
  const description = document.getElementById('description');
  const wind = document.getElementById('wind');
  const clouds = document.getElementById('clouds');
  const humidity = document.getElementById('humidity');

  const temp = document.getElementById('temp');
  temp.addEventListener('click', () => {
    temp.classList.toggle('imperial');
  });

  const formatDate = (date) => format(new Date(date), 'h:m a — iiii, dd MMM `yy');

  const iconClass = (icon) => {
    const iconCode = icon.slice(0, 2);
    const dayNight = icon[2] === 'd' ? 'day' : 'night';

    switch (iconCode) {
      case '04':
        return 'wi wi-cloudy';
      case '09':
        return `wi wi-${dayNight}-showers`;
      case '10':
        return `wi wi-${dayNight}-rain`;
      case '11':
        return `wi wi-${dayNight}-thunderstorm`;
      case '13':
        return `wi wi-${dayNight}-snow`;
      default:
        return 'wi wi-cloud';
    }
  };

  const backgroundImage = (icon) => {
    const iconCode = icon.slice(0, 2);
    const isDay = icon[2] === 'd';

    switch (iconCode) {
      case '01':
        return isDay ? sunnyImg : clearImg;
      case '02':
        return fewCloudsImg;
      case '03':
        return scatteredCloudsImg;
      case '04':
        return brokenCloudsImg;
      case '09':
        return rainImg;
      case '10':
        return lightRainImg;
      case '11':
        return snowImg;
      case '13':
        return mistImg;
      default:
        return brokenCloudsImg;
    }
  };

  const render = (data) => {
    background.src = backgroundImage(data.icon);
    cityName.innerHTML = data.city;
    country.innerHTML = data.country;
    dateTime.innerHTML = formatDate(data.dateTime);
    tempC.innerHTML = Math.round(data.tempC);
    tempF.innerHTML = Math.round(data.tempF);
    icon.className = iconClass(data.icon);
    description.innerHTML = data.description;
    wind.innerHTML = Math.round(data.wind);
    clouds.innerHTML = data.clouds;
    humidity.innerHTML = data.humidity;
  };

  return {
    render,
  };
})();

export default DOM;
