const { Orders, Buyers, Providers } = require('../models');

const getAllOrders = async () => {
  const getAll = await Orders.findAll({
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

return getAll;
};

  module.exports = {
    getAllOrders,
  };