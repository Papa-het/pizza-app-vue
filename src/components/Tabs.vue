<template>
  <div class="tabs">
    <ul class="tabs-list">
      <li
        v-for="tab in tabs"
        :class="`tabs-list--item ${active === tab.value ? ' active' : ''}`"
        :key="tab.value"
        @click="setActive(tab.value)"
      >
        {{ tab.label }}
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'Tabs',
  data() {
    return {
      active: 0,
    };
  },
  computed: {
    tabs() {
      return this.$store.getters['common/GET_TABLIST'];
    },
  },
  methods: {
    setActive(i: number) {
      this.active = i;
    },
  },
});
</script>

<style lang="scss" scoped>
.tabs {
  margin-top: 40px;

  &-list {
    display: flex;
    list-style: none;
    width: 70%;
    overflow-x: scroll;

    &--item {
      margin-right: 20px;
      background: #f9f9f9;
      border-radius: 30px;
      padding: 10px 20px;
      color: #2c2c2c;
      font-weight: bold;
      user-select: none;

      &:hover {
        cursor: pointer;
        background: #ededed;
      }

      &.active {
        color: #fff;
        background: #282828;
      }
    }
  }
}
</style>
