<template>
  <div id="app">
    <Map />
  </div>
</template>
<script>
import axios from 'axios';
import VueAxios from 'vue-axios';
import Vue from 'vue';
import Map from './components/Map.vue';

Vue.use(VueAxios, axios);

export default {
  name: 'App',
  components: {
    Map,
  },
  created() {
    document.title = 'Ubike 地圖';
  },
};
</script>

<style lang="scss">
</style>
