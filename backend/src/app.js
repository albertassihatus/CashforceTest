const express = require('express');
const routes = require('./routes/router');
const cors = require('cors');

const app = express();

app.use(express.json());

app.use(routes);

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Origin", 'GET');
  app.use(cors());
    next();
});

module.exports = app;
