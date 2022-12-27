const express = require('express');

const userRouter = require('./user.router');
const buyerRouter = require('./buyers.router');
const cnpjRouter = require('./cnpjs.router');
const providerRouter = require('./providers.router');
const orderRouter = require('./orders.router');

const routers = express.Router();

routers.use('/users', userRouter);

routers.use('/buyers', buyerRouter);

routers.use('/cnpjs', cnpjRouter);

routers.use('/providers', providerRouter);

routers.use('/orders', orderRouter);

module.exports = routers;