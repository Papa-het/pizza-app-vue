<template>
  <li class="pizzaCard">
    <img class="pizzaCard-img" :src="pizza.imageUrl" alt="" />
    <h3 class="pizzaCard-name">{{ pizza.name }}</h3>
    <div class="pizzaCard-controls">
      <div class="pizzaCard-controls--line">
        <div
          :class="
            `pizzaCard-controls--item${
              active.type === item.value ? ' active' : ''
            }`
          "
          v-for="item in topList"
          :key="item.label"
          @click="setActive(item.value, true)"
        >
          {{ item.label }}
        </div>
      </div>
      <div class="pizzaCard-controls--line">
        <div
          :class="
            `pizzaCard-controls--item${
              active.size === item.value ? ' active' : ''
            }`
          "
          v-for="item in bottomList"
          :key="item.label"
          @click="setActive(item.value)"
        >
          {{ item.label }}
        </div>
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
  data() {
    return {
      active: {
        type: 0,
        size: 0,
      },
      topList: [
        {
          label: 'тонкое',
          value: 0,
        },
        {
          label: 'традиционное',
          value: 1,
        },
      ],
      bottomList: [
        {
          label: '26 см.',
          value: 0,
        },
        {
          label: '30 см.',
          value: 1,
        },
        {
          label: '40 см.',
          value: 2,
        },
      ],
    };
  },
  methods: {
    setActive(value: number, isTop = false) {
      if (isTop) return (this.active.type = value);
      return (this.active.size = value);
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

      &:hover {
        cursor: pointer;
        background: #ffffff;
        opacity: 1;
      }
    }
  }

  &-name {
    font-weight: 900;
    font-size: 20px;
    line-height: 24px;
    text-align: center;
    letter-spacing: 0.01em;
    color: #000000;
    margin: 20px 0;
  }
}
</style>
