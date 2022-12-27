const express = require('express');

const buyersController = require('../controllers/buyers.controller');
   
const router = express.Router();

router.get('/', buyersController.getAllCat);

module.exports = router;