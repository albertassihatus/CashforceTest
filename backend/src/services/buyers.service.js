const { Buyers } = require('../models');

  const getAllCat = async () => {
    const categories = await Buyers.findAll();

    return categories;
  };

  module.exports = {
    getAllCat,
  };