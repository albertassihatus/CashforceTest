<template>
  <div class="contentOrders">
      <img class='handshake' alt="handshakeNfs" src="../assets/handshakenfs.png">
      <h3>Visualize as notas fiscais que você tem.</h3>

      <div>
        <ul class="theader">
          <li>NOTA FISCAL</li>
          <li>SACADO</li>
          <li class="mCedente">CEDENTE</li>
          <li class="mEmiss">EMISSÃO</li>
          <li class="mVal">VALOR</li>
          <li class="mStat">STATUS</li>
        </ul>

        <ul v-for="order in orders" :key="order._id" class="tbody">
          <li class="text-center">{{ order.nNf }}</li>
          <li class="text-center ">{{ order.buyer.name }}</li>
          <li class="text-center ">{{ order.provider.name }}</li>
          <li class="text-center">{{ formatDate(order.emissionDate) }}</li>
          <li class="text-center green
          ">R$ {{ formatPrice(order.value) }}</li>
          <li class="text-center green"> {{
          getStatusString(order.orderStatusBuyer)}}
           </li>
          <li class="text-center">
            <button
            @click="showAlert"
            >Dados do cedente
            </button>
          </li>
        </ul>
  </div>
  </div>
</template>

<script>
import OrderService from '../services/OrderService';

export default {
  name: 'ListOrders',
  data() {
    return {
      orders: [],
    };
  },

  mounted() {
    this.listAllOrders();
    this.getStatusString();
  },

  methods: {
    async listAllOrders() {
      const response = await OrderService.getOrders();
      this.orders = response;
    },

    getStatusString(status) {
      const arrayStatus = ['Pendente de confirmação', 'Pedido confirmado', 'Não reconhece o pedido', 'Mercadoria não recebida', 'Recebida com avaria', 'Devolvida', 'Recebida com devolução parcial', 'Recebida e confirmada', 'Pagamento Autorizado'];

      switch (status) {
        case '0':
          return arrayStatus[0];
        case '1':
          return arrayStatus[1];
        case '2':
          return arrayStatus[2];
        case '3':
          return arrayStatus[3];
        case '4':
          return arrayStatus[4];
        case '5':
          return arrayStatus[5];
        case '6':
          return arrayStatus[6];
        case '7':
          return arrayStatus[7];
        case '8':
          return arrayStatus[8];
        default:
          return 'Aguarde';
      }
    },

    formatPrice(value) {
      const val = Number(value.replace(',', '.'));
      if (!val) return '0,00';
      const valueString = val.toFixed(2).replace('.', ',');
      return valueString.replace(/\B(?=(\d{3})+(?!\d))/g, '.');
    },

    formatDate(value) {
      const date = new Date(value);

      const result = `${date.getDate()}${(date.getMonth() + 1) > 9 ? '/' : '0'}${date.getMonth() + 1}${date.getDate() > 9 ? '/' : '/'}${date.getFullYear()}`;

      return result;
    },
    showAlert() {
      this.$swal({
        icon: 'error',
        title: 'Oops...',
        text: 'Em Manutenção!',
        footer: '<a href="">contato@cashforce.com.br </a> (11) 94173-9568',
      });
    },
  },
};
</script>

<style scoped>

.theader {
  display: flex;
  list-style: none;
  align-items: center;
  width: 836px;
  height: 48px;
  background: #FFFFFF;
  margin-top: 19px;

  font-family: 'DM Sans';
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  line-height: 16px;

  color: #A1A8B8;

  border-radius: 4px;
}

.theader li {
  width: 78px;
  margin-right: 50px;
}

.mCedente {
  margin-left: 16px;
}

.mEmiss {
  margin-left: 30px;
}

.mVal {
  margin-left: 12px;
}

.mStat {
  margin-left: 26px;
}

.tbody li {
  width: 100px;
  margin-right: 50px;
}

.tbody {
  display: flex;
  list-style: none;
  align-items: center;
  justify-content: flex-start;
  width: 1177px;
  height: 48px;
  margin-bottom: 16px;
  background: #FFFFFF;
  border: 1px solid #DFE2EB;

  padding: 0;
  border-radius: 6px;  font-family: 'DM Sans';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 18px;

  color: #4D5566;
}

.tbody:hover {
  background-color: #A1A8B8;
  opacity: 0.9;
  color: #FFFFFF;
  font-weight: bold;
}

button {
  position: relative;
  left: 0px;
  align-items: center;
  width: 165px;
  height: 32px;
  left: 100px;
  border: 1px solid #CAD3FF;
  border-radius: 24px;
  background-color: transparent;

  font-family: 'DM Sans';
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  line-height: 16px;
  color: #727D94;
}

.contentOrders {
  padding-top: 100px;
}

.handshake {
  width: 182px;
  height: 28px;
}

.theader {
  border: 10px;
  width: 1177px;
  height: 22px;
}

th {
  font-family: 'DM Sans';
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  line-height: 16px;

  color: #A1A8B8;

  border-radius: 4px;
}

.tbody {
  width: 1177px;
  height: 48px;
  background: #FFFFFF;
  border: 1px solid #DFE2EB;
  border-radius: 6px;
}

td {
  width: 30px;
  height: 18px;

  font-family: 'DM Sans';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 18px;

  color: #4D5566;
}

.green {
  color: #00AD8C;
}

h3 {
  width: 255px;
  height: 20px;

  font-family: 'DM Sans';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;

  color: #727D94;

  flex: none;
  order: 1;
  flex-grow: 0;
}
</style>
