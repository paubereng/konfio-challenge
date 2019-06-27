import axios from 'axios';
import { BASE_CURRENCY } from '../constants';

export function fetchSymbols() {
  return axios.get('/api/symbols')
    .then(response => response.data.symbols)
    .catch(error => error);
}

export function fetchRates(datesArray, currencies) {
  const linksArr = datesArray.map(date => `/api/rates?date=${date}`);
  const params = {
    params: {
      base: BASE_CURRENCY,
      symbols: currencies,
    },
  };
  return axios.all(linksArr.map(link => axios.get(link, params)))
    .then(axios.spread((...res) => {
      const newRates = [];
      res.map((r) => {
        if (r.data.success === true) {
          let object = {};
          object = {
            name: r.data.date,
            ...r.data.rates,
          };
          return newRates.push(object);
        }
        return false;
      });
      return newRates;
    }));
}
