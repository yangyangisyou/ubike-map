<template>
  <div id="app">
    <Map />
  </div>
</template>
<script>
// import axios from 'axios';
import Map from './components/Map.vue';


export default {
  name: 'App',
  components: {
    Map,
  },
  // mounted() {
  //   axios.get('https://tcgbusfs.blob.core.windows.net/blobyoubike/YouBikeTP.json')
  //     .then( (response) => {
  //       console.log(response);
  //     })
  // },
};
</script>

<style lang="scss">
</style>
