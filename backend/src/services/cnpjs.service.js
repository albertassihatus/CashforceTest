const { Cnpjs } = require('../models');

  const getAllCnpjs = async () => {
    const cnpjs = await Cnpjs.findAll();

    return cnpjs;
  };

  module.exports = {
    getAllCnpjs,
  };