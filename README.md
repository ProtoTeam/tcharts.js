# tcharts.js

> [TCharts.js](http://tcharts.org) is a Lightweight and fast terminal ASCII charts for nodejs and browser.

[![Ver](https://img.shields.io/npm/v/tcharts.js.svg)](https://www.npmjs.com/package/tcharts.js) [![Build Status](https://travis-ci.org/TCharts/tcharts.js.svg?branch=master)](https://travis-ci.org/TCharts/tcharts.js)


## 1. Install & Usage

> npm i -S tcharts.js

```js
const TCharts = require('tcharts.js');
const { Bar, HBar, Box, Table } = TCharts；

const box = new Box(60, 20); // instance the chart with options.
box.setData([
  {value:100, name:'A'},
  {value:100, name:'B'},
  {value:100, name:'C'},
  {value:100, name:'你好'},
]);

const boxString = box.string();

console.log(chartString);
```


## 2. Supported charts

 - `Bar`: bar chart, with x, y.
 - `HBar`: horizontal bar chart.
 - `Box`: box chart showing with a square.
 - `Table`: data table in terminal.

How to use them, you can see the testcases in `__tests__` folder.


## 3. Build & Test

```
npm i

npm run build

npm test
```

Then you can see the result of test cases.


## 4. License

ISC@[ProtoTeam](https://github.com/ProtoTeam).


