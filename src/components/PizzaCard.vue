<template>
  <li class="pizzaCard">{{ pizza.name }}</li>
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
}
</style>
