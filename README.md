# Taiwan ubike map - 台灣ubike地圖

## Demo
Version 1.0: [Click me](https://ubikemap.yyisyou.tw/)

- Now avalible in Taipei city.

## About 
<p float="left" margin="10px">
  <img src="https://vuejs.org/images/logo.png" width="100px"> 
  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/440px-Bootstrap_logo.svg.png" width="100px">
  <img src="https://sass-lang.com/assets/img/logos/logo-b6e1ef6e.svg" width="100px">  
  <img src="https://d33wubrfki0l68.cloudfront.net/7a197cfe44548cc1a3f581152af70a3051e11671/78df8/img/babel.svg" width="150px">
  <img src="https://leafletjs.com/docs/images/logo.png" width="200px">
  <img src="https://data.taipei/img/department.2fd5d7eb.png" width="200px">
</p>

### F2E
* Vue.js 3.0  

### CSS
* BootStrap  
* SASS

### Map API
* [Leaflet](https://leafletjs.com/examples/quick-start/), an open street map  

### Open data
* [YouBike臺北市公共自行車即時資訊 - Taipei YouBike real time data](https://data.taipei/#/dataset/detail?id=8ef1626a-892a-4218-8344-f7ac46e1aa48)  
### Ajax
* axios
* vue-axios

### Features
* Babel  
* CSS Pre-processors  
* Linter  
* Sass/SCSS (with node-sass)  
* [Airbnb Lint](https://github.com/airbnb/javascript)  
<img src="https://i.imgur.com/A2XaNqc.png"> 

## How to run
1. install related dev tools
```
npm install bootstrap
npm install leaflet
npm install --save axios vue-axios
```
or you can just install dependencies of package.json.
```
npm install
```

2. run on local  
```
npm run serve
```
3. Go to http://localhost:8080

## Challenges
Ubike data is distributed on different government websites,  
So it's a little tricky to integrate those open data.  
If you interested in more open data, those are shown below:  
- [新北市公共自行車租賃系統](https://data.gov.tw/dataset/28318)  
- [桃園公共自行車即時服務資料](https://data.tycg.gov.tw/opendata/datalist/datasetMeta?oid=5ca2bfc7-9ace-4719-88ae-4034b9a5a55c). 
- [新竹市公共自行車租賃系統](http://ipgod.nchc.org.tw/dataset/376580000a-29f955)

