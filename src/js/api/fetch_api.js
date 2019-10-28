const fetchAPI = async (url) => {
  try {
    const response = await fetch(url, { mode: 'cors' });
    const responseJson = await response.json();

    return `${response.status}` === '200' ? responseJson : false;
  } catch (error) {
    return error;
  }
};

export default fetchAPI;
