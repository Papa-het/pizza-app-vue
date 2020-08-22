<template>
  <section class="layout">
    <slot />
  </section>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'Layout',
});
</script>

<style lang="scss">
body,
h1,
h2,
h3,
h4,
a,
p,
ul,
li {
  margin: 0;
  padding: 0;
  text-align: initial;
}

body {
  background: #ffdf8c;
}

.layout {
  margin: 45px;
  padding: 52px 38px;
  background: #fff;
  border-radius: 10px;
}
</style>
