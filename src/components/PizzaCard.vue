<template>
  <li class="pizzaCard">
    <img class="pizzaCard-img" :src="pizza.imageUrl" alt="" />
    <div class="pizzaCard-controls">
      <div class="pizzaCard-controls--line">
        <div class="pizzaCard-controls--item">тонкое</div>
        <div class="pizzaCard-controls--item">традиционное</div>
      </div>
      <div class="pizzaCard-controls--line">
        <div class="pizzaCard-controls--item">26 см.</div>
        <div class="pizzaCard-controls--item">30 см.</div>
        <div class="pizzaCard-controls--item">40 см.</div>
      </div>
    </div>
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
  display: flex;
  flex-direction: column;

  &-img {
    height: 259px;
    object-fit: contain;
  }

  &-controls {
    background: #f3f3f3;
    border-radius: 10px;
    padding: 8px;
    &--line {
      display: flex;
      justify-content: space-between;
    }

    &--line:first-child {
      padding-bottom: 8px;
    }

    &--item {
      width: 100%;
      border-radius: 5px;
      padding: 10px 20px;
      margin: 0 2px;

      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: 900;

      color: #2c2c2c;
      opacity: 0.2;

      &.active {
        background: #ffffff;
        box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.04);
        opacity: 1;
      }
    }
  }
}
</style>
