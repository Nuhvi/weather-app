import fetchAPI from './fetch_api.js';

const geolocation = (() => {
  const getJson = async () => fetchAPI('https://ipapi.co/json/');

  const parseData = (jsonData) => ({ city: jsonData.city });

  const clientData = async () => {
    const jsonData = await getJson();
    return parseData(jsonData);
  };

  return {
    clientData,
  };
})();

export default geolocation;
