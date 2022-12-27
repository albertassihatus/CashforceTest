const { Orders, Buyers, Providers } = require('../models');

const getAllCat = async () => {
  const getAllPosts = await Orders.findAll({
    include: [
      { model: Buyers,
        as: 'buyer',
        attributes: ['name'],
      },
      {
        model: Providers,
        as: 'provider',
        attributes: ['name'],
      },
  ],
  });

return getAllPosts;
};

  module.exports = {
    getAllCat,
  };