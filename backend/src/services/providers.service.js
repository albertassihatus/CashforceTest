const { Providers } = require('../models');

  const getAllProviders = async () => {
    const providers = await Providers.findAll();

    return providers;
  };

  module.exports = {
    getAllProviders,
  };