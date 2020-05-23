<template>
    <div class="row no-gutters">
    <!-- 選擇地區 -->
    <div class="toolbox col-sm-3 p-2 bg-white">
        <div class="form-group d-flex">
        <label for="city" class="col-form-label mr-2 text-right">縣市</label>
        <div class="flex-fill">
            <select id="city" class="form-control">
                <!-- 製作下拉選單 -->
            </select>
        </div>
        </div>
        <div class="form-group d-flex">
        <label for="dist" class="col-form-label mr-2 text-right">地區</label>
        <div class="flex-fill">
            <select id="dist" class="form-control">
                <!-- 製作下拉選單 -->
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
  }),
};
</script>

<style scoped lang="scss">
    @import 'bootstrap/scss/bootstrap';
</style>
