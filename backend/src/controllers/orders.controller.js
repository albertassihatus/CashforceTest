const ordersService = require('../services/orders.service');

const getAllOrders = async (_req, res) => {
  const orders = await ordersService.getAllOrders();
  
  return res.status(200).json(orders);
};

module.exports = {
  getAllOrders,
  };