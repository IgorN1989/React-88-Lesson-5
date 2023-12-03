import axios from 'axios';

axios.defaults.baseURL = 'https://api.opencagedata.com/geocode/v1/json';

export const getUserInfo = async (lat, long) => {
  const { data } = await axios.get(
    `?q=${lat}+${long}&key=c34efdc8ec4d43dfa0a3980567efbefd`
  );
  console.log(data);
  return data.results[0].annotations.currency.iso_code;
};
