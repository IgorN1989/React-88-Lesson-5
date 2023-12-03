import axios from "axios";

axios.defaults.baseURL = "https://api.opencagedata.com/geocode/v1/json";

export const getUserInfo = async ({ latitude, longitude }) => {
  const { data } = await axios.get(
    `?q=${latitude}+${longitude}&key=c34efdc8ec4d43dfa0a3980567efbefd`
  );
  return data.results[0].annotations.currency.iso_code;
};
