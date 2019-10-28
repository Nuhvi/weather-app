import fetchAPI from './fetch_api.js';

const geolocation = (() => {
  const API_KEY = '65bd2aca-4aa7-4f33-86d3-fabf1e320f74';
  const BASE_ENDPOINT = 'https://ipfind.co/';

  const getJson = async () => {
    const url = `${BASE_ENDPOINT}me?auth=${API_KEY}`;
    return fetchAPI(url);
  };

  const parseData = (jsonData) => jsonData.city;

  const clientData = async () => {
    if (localStorage.clientCity) return localStorage.clientCity;

    const jsonData = await getJson();
    if (jsonData) {
      const clientCity = parseData(jsonData);
      localStorage.clientCity = clientCity;
      return clientCity;
    }
    return false;
  };

  return {
    clientData,
  };
})();

export default geolocation;
