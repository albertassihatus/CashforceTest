import Api from './Api';

export default {
  async getOrders() {
    const response = await Api().get('/');
    return response.data;
  },
};
