const express = require('express');
const path = require('path');
const port = process.env.PORT || 8080;
const app = express();
const routes = require('./routes');

app.use(express.static(path.join(__dirname, '../../dist/')));

app.use(routes);
app.listen(port);
