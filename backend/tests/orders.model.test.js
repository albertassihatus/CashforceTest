const {
    sequelize,
    dataTypes,
    checkModelName,
    checkPropertyExists,
  } = require('sequelize-test-helpers');
  
  const OrdersModel = require('../src/models/Orders');
  
  describe('O model de Orders', () => {
    const Orders = OrdersModel(sequelize, dataTypes);
    const orders = new Orders();
  
    describe('possui o nome "Orders"', () => {
      checkModelName(Orders)('Orders');
    });
  
    describe('possui as propriedades "nNf", "emissionDate", "value" e "orderStatusBuyer"', () => {
        ['nNf', 'emissionDate', 'value', 'orderStatusBuyer'].forEach(checkPropertyExists(orders));
    });
  });