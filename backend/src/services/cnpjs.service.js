const { Cnpjs } = require('../models');

  const getAllCat = async () => {
    const categories = await Cnpjs.findAll();

    return categories;
  };

  module.exports = {
    getAllCat,
  };