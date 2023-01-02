<template>
    <div class="sider">
      <img alt="CashforceLogo" src="./assets/logo.png">
      <img class="nfsBtn" alt="btnNfs" src="./assets/handshake.png">
    </div>
    <div class="frameheader">
    </div>
      <ListOrders class="content"/>
</template>

<script>
import ListOrders from './components/ListOrders.vue';

export default {
  name: 'App',
  components: {
    ListOrders,
  },
};
</script>
<style>

 @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&display=swap');

#app {
  max-width: 1560px;
  max-height: 900px;
  display:flex;
  justify-content: space-between;
}

.sider {
  max-width: 288px;
  height: 900px;
  background: #FBFDFE;
}

img {
  max-width: 288px;
}

.nfsBtn:hover {
  cursor: pointer;
  background: #FFFFFF;
  box-shadow: 0px 10px 30px rgba(225, 229, 236, 0.5);
}

.content {
  max-width: 1272px;
  max-height: 900px;
  right: 0px;
  top: 60px;
  bottom: 0px;
  padding-left: 48px;
  background: #FFFFFF;
  box-shadow: 0px 10px 30px rgba(225, 229, 236, 0.5);
  border-radius: 15px 0px 0px 15px;
}

.frameheader {
  position: absolute;
  left: 288px;
  width: 1224px;
  height: 64px;
  background: #FFFFFF;
  border-bottom: 1px solid #DFE2EB;
  border-radius: 12px 0px 0px 0px;
}
</style>
