(function(t){function e(e){for(var a,i,s=e[0],l=e[1],c=e[2],d=0,p=[];d<s.length;d++)i=s[d],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&p.push(o[i][0]),o[i]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(t[a]=l[a]);u&&u(e);while(p.length)p.shift()();return r.push.apply(r,c||[]),n()}function n(){for(var t,e=0;e<r.length;e++){for(var n=r[e],a=!0,s=1;s<n.length;s++){var l=n[s];0!==o[l]&&(a=!1)}a&&(r.splice(e--,1),t=i(i.s=n[0]))}return t}var a={},o={app:0},r=[];function i(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=t,i.c=a,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)i.d(n,a,function(e){return t[e]}.bind(null,a));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=e,s=s.slice();for(var c=0;c<s.length;c++)e(s[c]);var u=l;r.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("Map")],1)},r=[],i=n("bc3a"),s=n.n(i),l=n("a7fe"),c=n.n(l),u=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"row no-gutters"},[n("div",{staticClass:"toolbox col-sm-3 p-2 bg-white"},[n("div",{staticClass:"form-group d-flex"},[n("label",{staticClass:"col-form-label mr-2 text-right",attrs:{for:"city"}},[t._v("縣市")]),n("div",{staticClass:"flex-fill"},[n("select",{directives:[{name:"model",rawName:"v-model",value:t.select.city,expression:"select.city"}],staticClass:"form-control",attrs:{id:"city"},on:{change:function(e){var n=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.$set(t.select,"city",e.target.multiple?n:n[0])}}},t._l(t.city,(function(e){return n("option",{key:e.name,domProps:{value:e.name}},[t._v(" "+t._s(e.name)+" ")])})),0)])]),n("div",{staticClass:"form-group d-flex"},[n("label",{staticClass:"col-form-label mr-2 text-right",attrs:{for:"dist"}},[t._v("地區")]),n("div",{staticClass:"flex-fill"},[n("select",{directives:[{name:"model",rawName:"v-model",value:t.select.dist,expression:"select.dist"}],staticClass:"form-control",attrs:{id:"dist"},on:{change:function(e){var n=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.$set(t.select,"dist",e.target.multiple?n:n[0])}}},t._l(t.city.find((function(e){return e.name===t.select.city})).districts,(function(e){return n("option",{key:e.name,domProps:{value:e.name}},[t._v(" "+t._s(e.name)+" ")])})),0)])])]),t._m(0)])},d=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"col-sm-9"},[n("div",{attrs:{id:"map"}})])}],p=(n("99af"),n("4de4"),n("7db0"),n("4160"),n("d81d"),n("b0c0"),n("b64b"),n("159b"),n("e11e")),f=n.n(p),m=n("e56c"),b={name:"Map",props:{msg:String},data:function(){return{city:m,select:{city:"臺北市",dist:"中正區"},ubikes:[],OSMap:{}}},created:function(){var t=this,e="https://tcgbusfs.blob.core.windows.net/blobyoubike/YouBikeTP.json";this.axios.get(e).then((function(e){return t.ubikes=Object.keys(e.data.retVal).map((function(t){return e.data.retVal[t]})),e}))},mounted:function(){this.OSMap=f.a.map("map",{center:[25.041956,121.508791],zoom:18}),f.a.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",{attribution:'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',maxZoom:18}).addTo(this.OSMap)},computed:{youbikes:function(){var t=this;return this.ubikes.filter((function(e){return e.sarea===t.select.dist}))}},watch:{youbikes:function(){this.updateMarkers()}},methods:{updateMarkers:function(){var t=this;this.OSMap.eachLayer((function(e){e instanceof f.a.Marker&&t.OSMap.removeLayer(e)})),this.youbikes.forEach((function(e){f.a.marker([e.lat,e.lng]).bindPopup('<p><strong style="font-size: 20px;">'.concat(e.sna,'</strong></p>\n                      <strong style="font-size: 16px; color: #d45345;">可租借車輛剩餘：').concat(e.sbi," 台</strong><br>\n                      可停空位剩餘: ").concat(e.bemp,"<br>\n                      <small>最後更新時間: ").concat(e.mday,"</small>")).addTo(t.OSMap)})),this.city[0].districts.find((function(e){return e.name===t.select.dist&&t.OSMap.flyTo(new f.a.LatLng(e.latitude,e.longitude),15),e.name===t.select.dist}))}}},v=b,g=(n("7d19"),n("2877")),y=Object(g["a"])(v,u,d,!1,null,"40167ef4",null),h=y.exports;a["a"].use(c.a,s.a);var w={name:"App",components:{Map:h},created:function(){document.title="Ubike 地圖"},mounted:function(){var t="production";document.documentElement.className=t}},x=w,C=Object(g["a"])(x,o,r,!1,null,null,null),_=C.exports;a["a"].config.productionTip=!1,new a["a"]({render:function(t){return t(_)}}).$mount("#app")},"7d19":function(t,e,n){"use strict";var a=n("d44b"),o=n.n(a);o.a},d44b:function(t,e,n){},e56c:function(t){t.exports=JSON.parse('[{"sort":1,"id":"0000","name":"臺北市","districts":[{"sort":10,"id":1,"name":"中正區","latitude":25.044214,"longitude":121.524725,"zipCode":100},{"sort":12,"id":2,"name":"大同區","latitude":25.066128,"longitude":121.51558,"zipCode":103},{"sort":2,"id":3,"name":"中山區","latitude":25.064449,"longitude":121.533668,"zipCode":104},{"sort":8,"id":4,"name":"松山區","latitude":25.049878,"longitude":121.577233,"zipCode":105},{"sort":4,"id":5,"name":"大安區","latitude":25.026511,"longitude":121.534346,"zipCode":106},{"sort":11,"id":6,"name":"萬華區","latitude":25.035047,"longitude":121.499776,"zipCode":108},{"sort":5,"id":7,"name":"信義區","latitude":25.033427,"longitude":121.566911,"zipCode":110},{"sort":7,"id":8,"name":"士林區","latitude":25.092897,"longitude":121.519771,"zipCode":111},{"sort":6,"id":9,"name":"北投區","latitude":25.132377,"longitude":121.502949,"zipCode":112},{"sort":1,"id":10,"name":"內湖區","latitude":25.06936,"longitude":121.588996,"zipCode":114},{"sort":9,"id":11,"name":"南港區","latitude":25.054527,"longitude":121.606793,"zipCode":115},{"sort":3,"id":12,"name":"文山區","latitude":24.989503,"longitude":121.5702,"zipCode":116}]}]')}});
//# sourceMappingURL=app.d0c70dc4.js.map