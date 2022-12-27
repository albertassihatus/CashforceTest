const cnpjsService = require('../services/cnpjs.service');
// const jwtUtil = require('../utils/jwt.util');

const getAllCat = async (_req, res) => {
  const categories = await cnpjsService.getAllCat();

  return res.status(200).json(categories);
};

module.exports = {
  getAllCat,
  };