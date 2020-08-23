<template>
  <section class="pizzaList">
    <h1 class="pizzaList-title">Все пиццы</h1>

    <ul class="pizzaList-list">
      <PizzaCard v-for="pizza in pizzaList" :key="pizza.id" :pizza="pizza" />
    </ul>
  </section>
</template>

<script lang="ts">
import Vue from 'vue';
import PizzaCard from './PizzaCard.vue';

import { Pizza } from '@/types';

export default Vue.extend({
  name: 'PizzaList',
  components: { PizzaCard },
  computed: {
    pizzaList(): Pizza[] {
      return this.$store.getters['pizzaList/GET_PIZZALIST'];
    },
  },
  methods: {
    fetchData() {
      return this.$store.dispatch('pizzaList/FETCH_PIZZALIST');
    },
  },
  beforeMount() {
    this.fetchData();
  },
});
</script>

<style lang="scss" scoped>
.pizzaList {
  padding-top: 32px;

  &-title {
    font-size: 32px;
    color: #000000;
    padding-bottom: 35px;
  }

  &-list {
    display: grid;
    grid-auto-flow: row;
    grid-gap: 30px;
    grid-template: auto / 1fr 1fr 1fr 1fr;
    align-items: stretch;
    justify-items: stretch;
    list-style: none;
  }
}
</style>
