var express = require('express');
var router = express.Router();
var axios = require('axios');
var cache = require('./cacheMiddleware');

var BASE_URL = 'https://data.fixer.io/api/';
var API_KEY = '5b61b73b560cc3b4357f4e999cf160c5';


router.get('/api/symbols', cache(30), async (req, res, next) => {
  try {
    const symbols = await axios.get(BASE_URL + 'symbols?access_key=' + API_KEY);
    res.send(symbols.data);
  } catch (error) {
    res.status(500);
    res.send(error);
  }
});

router.get('/api/rates', cache(30), async (req, res, next) => {
  var params = {
    params: {
      access_key: API_KEY,
      base: req.query.base,
      symbols: req.query.symbols
    }
  }
  var date = req.query.date;
  try {
    const rates = await axios.get(BASE_URL + date, params);
    res.send(rates.data);
  } catch (error) {
    res.status(500);
    res.send(error);
  }
});

module.exports = router;
