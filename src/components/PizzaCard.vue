<template>
  <li class="pizzaCard">
    <img class="pizzaCard-img" :src="pizza.imageUrl" alt="" />
  </li>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue';
import { Pizza } from '@/types';

export default Vue.extend({
  name: 'PizzaCard',
  props: {
    pizza: {
      type: Object as PropType<Pizza>,
      required: true,
    },
  },
});
</script>

<style lang="scss" scoped>
.pizzaCard {
  width: 100%;
  height: auto;

  &-img {
    height: 195px;
  }
}
</style>
