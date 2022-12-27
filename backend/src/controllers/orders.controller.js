const ordersService = require('../services/orders.service');
// const jwtUtil = require('../utils/jwt.util');

const getAllCat = async (_req, res) => {
  const categories = await ordersService.getAllCat();

  return res.status(200).json(categories);
};

module.exports = {
  getAllCat,
  };