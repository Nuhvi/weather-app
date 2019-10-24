const fetchAPI = async (url) => {
  try {
    const response = await fetch(url, { mode: 'cors' });
    const responseJson = await response.json();

    if (`${responseJson.cod}` === '200') return responseJson;

    return false;
  } catch (error) {
    return error;
  }
};

export default fetchAPI;