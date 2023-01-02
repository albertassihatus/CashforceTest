const providersService = require('../services/providers.service');
// const jwtUtil = require('../utils/jwt.util');

const getAllProviders = async (_req, res) => {
  const providers = await providersService.getAllProviders();

  return res.status(200).json(providers);
};

module.exports = {
  getAllProviders,
  };