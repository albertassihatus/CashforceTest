const userService = require('../services/user.service');

const getAll = async (_req, res) => {
    const users = await userService.getAll();

    return res.status(200).json(users);
};

module.exports = {
    getAll,
  };