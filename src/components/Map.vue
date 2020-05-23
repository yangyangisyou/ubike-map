/* eslint-disable */
<template>
    <div class="row no-gutters">
    <!-- 選擇地區 -->
    <div class="toolbox col-sm-3 p-2 bg-white">
        <div class="form-group d-flex">
        <label for="city" class="col-form-label mr-2 text-right">縣市</label>
        <div class="flex-fill">
            <select id="city" class="form-control" v-model="select.city">
                <!-- 製作下拉選單 -->
                <option v-bind:value="city.name"
                        v-bind:key="city.name"
                        v-for="city in city">
                        {{ city.name }}
                </option>
            </select>
        </div>
        </div>
        <div class="form-group d-flex">
        <label for="dist" class="col-form-label mr-2 text-right">地區</label>
        <div class="flex-fill">
            <select id="dist" class="form-control" v-model="select.dist">
                <!-- 製作下拉選單 -->
                <option :value="dist.name"
                        :key="dist.name"
                        v-for="dist in city.find((city) => city.name === select.city).districts">
                    {{ dist.name }}
                </option>
            </select>
        </div>
        </div>
    </div>

    <!-- 顯示地圖和 UBike 站點 -->
    <div class="col-sm-9">
        <div id="map"></div>
    </div>
    </div>
</template>
<script>
import city from '../assets/city.json';

export default {
  name: 'Map',
  props: {
    msg: String,
  },
  data: () => ({
    city,
    select: {
      city: '臺北市',
      dist: '中正區',
    },
  }),
  mounted() {
    const url = 'https://tcgbusfs.blob.core.windows.net/blobyoubike/YouBikeTP.json';
    this.axios.get(url)
      .then((response) => {
        console.log(response.data);
        return response;
      });
  },
};
</script>

<style scoped lang="scss">
    @import 'bootstrap/scss/bootstrap';
</style>
