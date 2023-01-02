const { Buyers } = require('../models');

  const getAllBuyers = async () => {
    const categories = await Buyers.findAll();

    return categories;
  };

  module.exports = {
    getAllBuyers,
  };