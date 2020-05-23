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
import leaflet from 'leaflet';
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
    ubikes: [],
    OSMap: {},
  }),
  created() {
    const url = 'https://tcgbusfs.blob.core.windows.net/blobyoubike/YouBikeTP.json';
    this.axios.get(url)
      .then((response) => {
        this.ubikes = Object.keys(response.data.retVal).map((key) => response.data.retVal[key]);
        return response;
      });
  },
  mounted() {
    // leaflet文件
    // https://leafletjs.com/examples/quick-start/
    // https://leafletjs.com/reference-1.6.0.html#tilelayer-url-template
    // map 設定
    this.OSMap = leaflet.map('map', {
      center: [25.041956, 121.508791],
      zoom: 18,
    });
    leaflet.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
      maxZoom: 18,
    }).addTo(this.OSMap);
  },
  computed: {
    // 取得ubike的資料
    youbikes() {
      return this.ubikes.filter((bike) => bike.sarea === this.select.dist);
    },
  },
  watch: {
    youbikes() {
      this.updateMarkers();
    },
  },
  methods: {
    updateMarkers() {
      // 移除被選取的座標 eachLayer()、removeLayer()
      // https://leafletjs.com/reference-1.6.0.html#map-eachlayer
      // https://leafletjs.com/reference-1.6.0.html#map-removelayer
      this.OSMap.eachLayer((layer) => {
        if (layer instanceof leaflet.Marker) {
          this.OSMap.removeLayer(layer);
        }
      });
      // 新增選擇的座標
      this.youbikes.forEach((bike) => {
        leaflet.marker([bike.lat, bike.lng])
          .bindPopup(`<p><strong style="font-size: 20px;">${bike.sna}</strong></p>
                      <strong style="font-size: 16px; color: #d45345;">可租借車輛剩餘：${bike.sbi} 台</strong><br>
                      可停空位剩餘: ${bike.bemp}<br>
                      <small>最後更新時間: ${bike.mday}</small>`)
          .addTo(this.OSMap);
      });
      // 聚焦到選擇的座標 panTo
      // https://leafletjs.com/reference-1.6.0.html#map-panto
      this.city[0].districts.find((dist) => {
        if (dist.name === this.select.dist) {
          // 聚焦座標
          this.OSMap.panTo(new leaflet.LatLng(dist.latitude, dist.longitude));
          // 傳送特效
          // this.OSMap.flyTo(new leaflet.LatLng(dist.latitude, dist.longitude), 15);
        }
        return dist.name === this.select.dist;
      });
    },
  },
};
</script>

<style scoped lang="scss">
    @import 'bootstrap/scss/bootstrap';
    #map {
        position: relative;
        height: 100vh;
    }
</style>
