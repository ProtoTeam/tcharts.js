# tcharts.js

> Lightweight and fast terminal ASCII charts for nodejs and browser.


## 1. Install & Usage

> npm i -S tcharts.js

```js
const TCharts = require('tcharts.js');
const { Bar, HBar, Box, Table } = TCharts；

const barChart = new Bar(options); // instance the chart with options.

const barString = barChart.string();

console.log(chartString);
```


## 2. Supported charts

 - `Bar`: bar chart, with x, y.
 - `HBar`: horizontal bar chart.
 - `Box`: box chart showing with a square.
 - `Table`: data table in terminal.
 
 
 ## 3. Configure options
 
```js
TODO
```

 
 ## 4. License

ISC@[hustcc](https://github.com/hustcc).
