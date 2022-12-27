const { Providers } = require('../models');

  const getAllCat = async () => {
    const categories = await Providers.findAll();

    return categories;
  };

  module.exports = {
    getAllCat,
  };