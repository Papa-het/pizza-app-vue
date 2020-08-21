<template>
  <section class="pizzaList">
    <h1 class="pizzaList-title">Все пиццы</h1>
  </section>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'PizzaList',
});
</script>

<style lang="scss" scoped>
.pizzaList {
  padding-top: 32px;

  &-title {
    float: left;
    font-size: 32px;
    color: #000000;
    padding-bottom: 35px;
  }
}
</style>
