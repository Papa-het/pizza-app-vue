<template>
  <div class="header">
    <div class="header-main">
      <h1>VUE PIZZA</h1>
      <p>самая вкусная пицца во вселенной</p>
    </div>
    <div class="header-orderBlock">
      <h4 class="header-orderBlock--cost">520 ₽</h4>
      <h4 class="header-orderBlock--amount">
        <img src="/images/icon-order.svg" alt="" /> 3
      </h4>
    </div>
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
  padding-bottom: 40px;
  border-bottom: 1px solid #f2f2f2;

  &-main {
    background: url('/images/logo.svg') no-repeat;
    background-position: 0 50%;
    padding-left: 50px;
    h1 {
      text-align: left;
      color: #181818;
      font-weight: 900;
    }
  }

  &-orderBlock {
    background: #fe5f1e;
    border-radius: 30px;
    min-width: 150px;
    min-height: 50px;

    display: flex;
    justify-content: space-evenly;
    align-items: center;

    h4 {
      color: #fff;
      display: flex;
      align-items: center;
      justify-content: center;
      height: 100%;
      width: 100%;
    }

    &--cost {
      position: relative;
      &::after {
        content: '';
        position: absolute;
        width: 1px;
        height: 50%;
        background: #fff;
        right: 0;
        opacity: 0.2;
      }
    }

    &--amount {
      img {
        padding-right: 8px;
      }
    }
  }
}
</style>
