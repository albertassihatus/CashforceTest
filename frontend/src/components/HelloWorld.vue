<template>
  <div class="hello">
    <h1>Notas Fiscais</h1>
    <h3>Visualize as notas fiscais que você tem.</h3>
    <table class="table table-striped">
      <thead>
        <tr>
          <th class="text-center">NOTA FISCAL</th>
          <th class="text-center">SACADO</th>
          <th class="text-center">CEDENTE</th>
          <th class="text-center">EMISSÃO</th>
          <th class="text-center">VALOR</th>
          <th class="text-center">STATUS</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="order in orders" :key="order._id">
          <td>{{ order.nNf }}</td>
          <td>{{ order.buyer.name }}</td>
          <td>{{ order.provider.name }}</td>
          <td>{{ order.emissionDate }}</td>
          <td>{{ order.value }}</td>
          <td>{{ order.orderStatusBuyer }}</td>
          <td>Botão</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>

import OrderService from '../services/OrderService';

export default {
  name: 'HelloWorld',
  data() {
    return {
      orders: [],
    };
  },
  mounted() {
    this.listAllOrders();
  },
  methods: {
    async listAllOrders() {
      const response = await OrderService.getOrders();
      this.orders = response;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
} */
</style>
