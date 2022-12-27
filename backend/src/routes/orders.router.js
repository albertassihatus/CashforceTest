const express = require('express');

const ordersController = require('../controllers/orders.controller');
   
const router = express.Router();

router.get('/', ordersController.getAllCat);

module.exports = router;