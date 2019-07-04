var express = require('express');
var router = express.Router();
var axios = require('axios');
var cache = require('./cacheMiddleware');

var BASE_URL = 'http://data.fixer.io/api/';
var API_KEY = 'f4d447a6d7c258597441341a055cbf2a';


router.get('/api/symbols', cache(300), async (req, res, next) => {
  try {
    const symbols = await axios.get(BASE_URL + 'symbols?access_key=' + API_KEY);
    res.send(symbols.data);
  } catch (error) {
    res.status(500);
    res.send(error);
  }
});

router.get('/api/rates', cache(300), async (req, res, next) => {
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
