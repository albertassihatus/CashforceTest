const buyersService = require('../services/buyers.service');

const getAllBuyers = async (_req, res) => {
  const buyers = await buyersService.getAllBuyers();

  return res.status(200).json(buyers);
};

module.exports = {
  getAllBuyers,
  };