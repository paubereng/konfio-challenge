import axios from 'axios';
import { BASE_URL, API_KEY, BASE_CURRENCY } from '../constants';

export function fetchSymbols() {
  return axios.get(`${BASE_URL}symbols`, {
    params: {
      access_key: API_KEY,
    },
  })
    .then(response => response.data.symbols)
    .catch(error => error);
}

export function fetchRates(datesArray, currencies) {
  const linksArr = datesArray.map(date => `${BASE_URL}${date}`);
  const params = {
    params: {
      access_key: API_KEY,
      base: BASE_CURRENCY,
      symbols: currencies,
    },
  };
  return axios.all(linksArr.map(link => axios.get(link, params)))
    .then(axios.spread((...res) => {
      const newRates = [];
      res.map((r) => {
        let object = {};
        object = {
          name: r.data.date,
          ...r.data.rates,
        };
        return newRates.push(object);
      });
      return newRates;
    }));
}
