import Api from './Api';

export default {
  async getOrders() {
    const response = await Api().get('/orders');
    return response.data;
  },
};
