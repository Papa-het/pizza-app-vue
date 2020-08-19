<template>
  <div class="home">
    <Layout>
      <Header msg="Welcome to Your Vue.js + TypeScript App" />
    </Layout>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Layout from '@/components/Layout.vue';
import Header from '@/components/Header.vue';

export default Vue.extend({
  name: 'Home',
  components: {
    Layout,
    Header,
  },
});
</script>
