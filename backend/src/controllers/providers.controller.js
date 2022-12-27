const providersService = require('../services/providers.service');
// const jwtUtil = require('../utils/jwt.util');

const getAllCat = async (_req, res) => {
  const categories = await providersService.getAllCat();

  return res.status(200).json(categories);
};

module.exports = {
  getAllCat,
  };