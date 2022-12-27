const express = require('express');

const cnpjsController = require('../controllers/cnpjs.controller');
   
const router = express.Router();

router.get('/', cnpjsController.getAllCat);

module.exports = router;