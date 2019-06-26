import axios from 'axios';
import { fetchSymbols, fetchRates } from '../fetch';

describe('fetch functions', () => {
  let mock;
  const currencies = 'EUR,USD';
  const dates = ['2019-01-01', '2019-02-01', '2019-03-01'];
  const symbols = fetchSymbols();
  const rates = fetchRates(dates, currencies);

  it('fetchSymbols works and contain EUR', () => {
    return expect(symbols).resolves.toEqual(
      expect.objectContaining({
        "EUR": "Euro"
      })
    );
  });
  it('fetchRates with range date of 3 works and return array of objects(3)', () => {
    return expect(rates).resolves.toHaveLength(3);
  });
});
