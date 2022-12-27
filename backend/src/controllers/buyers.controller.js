const buyersService = require('../services/buyers.service');
// const jwtUtil = require('../utils/jwt.util');

const getAllCat = async (_req, res) => {
  const categories = await buyersService.getAllCat();

  return res.status(200).json(categories);
};

module.exports = {
  getAllCat,
  };