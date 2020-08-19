<template>
  <div class="home">
    <Layout>
      <Header msg="Welcome to Your Vue.js + TypeScript App" />
      <Tabs />
    </Layout>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Layout from '@/components/Layout.vue';
import Header from '@/components/Header.vue';
import Tabs from '@/components/Tabs.vue';

export default Vue.extend({
  name: 'Home',
  components: {
    Layout,
    Header,
    Tabs,
  },
});
</script>
