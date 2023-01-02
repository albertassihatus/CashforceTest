const cnpjsService = require('../services/cnpjs.service');

const getAllCnpjs = async (_req, res) => {
  const cnpjs = await cnpjsService.getAllCnpjs();

  return res.status(200).json(cnpjs);
};

module.exports = {
  getAllCnpjs,
  };