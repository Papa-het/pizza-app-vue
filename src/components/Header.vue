<template>
  <div class="header">
    <div class="header-main">
      <h1>VUE PIZZA</h1>
      <p>самая вкусная пицца во вселенной</p>
    </div>
    <div class="header-orderBlock">0</div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'Header',
  props: {
    msg: String,
  },
});
</script>

<style lang="scss" scoped>
.header {
  display: flex;
  justify-content: space-between;

  &-main {
    background: url('/images/logo.svg') no-repeat;
    background-position: 0 50%;
    padding-left: 50px;
    h1 {
      text-align: left;
      color: #181818;
      font-weight: bold;
    }
  }
}
</style>
