# tcharts.js

> [TCharts.js](http://tcharts.org) is a Lightweight and fast terminal ASCII charts for nodejs and browser.

[![Ver](https://img.shields.io/npm/v/tcharts.js.svg)](https://www.npmjs.com/package/tcharts.js) [![Build Status](https://travis-ci.org/ProtoTeam/tcharts.js.svg?branch=master)](https://travis-ci.org/ProtoTeam/tcharts.js) [![Coverage Status](https://coveralls.io/repos/github/ProtoTeam/tcharts.js/badge.svg?branch=master)](https://coveralls.io/github/ProtoTeam/tcharts.js)

```
    +--------------+----------------------+---------------------+
    |              |                      |                     |
    |              |                      |                     |
    |              |                      |                     |
    |              |                      |                     |
    |              |                      |                     |
    |              |                      |                     |
    |              |        C:25%         |      Hello:25%      |
    |              |                      |                     |
    |              |                      |                     |
    |    A:25%     |                      |                     |
    |              |                      |                     |
    |              |                      |                     |
    |              +----------------------+---------------------+
    |              |                                            |
    |              |                                            |
    |              |                                            |
    |              |                   B:25%                    |
    |              |                                            |
    |              |                                            |
    +--------------+--------------------------------------------+

```


## 1. Install & Usage

> npm i -S tcharts.js


### Table

```js
const TCharts = require('tcharts.js');
const { Table } = TCharts;

const table = new Table(0.2); // set gap rate = 0.2
table.setData([
  ['標識符', '名字', '生日'],
  ['#1', '圖靈', 24],
  ['#2', '潘金蓮', false],
  ['#3', '西門慶', null],
  ['#4', '明日花绮罗'],
]);
console.log(table.string());
```

### Bar

```js
const TCharts = require('tcharts.js');
const { Bar } = TCharts;

const bar = new Bar();
bar.setData([
  {value:100, name:'A'},
  {value:45, name:'B'},
  {value:70, name:'C'},
  {value:30, name:'D'},
]);
console.log(bar.string());
```

### HBar

```js
const TCharts = require('tcharts.js');
const { HBar } = TCharts;

const hbar = new HBar();
hbar.setData([
  {value: 100, name: 'A'},
  {value: 45, name: 'B'},
  {value: 70, name: 'C'},
  {value: 30, name: 'D'},
]);
console.log(hbar.string());

```

### Box

```js
const TCharts = require('tcharts.js');
const { Box } = TCharts;

const box = new Box(60, 20); // width, height
box.setData([
  {value:100, name:'A'},
  {value:100, name:'B'},
  {value:100, name:'C'},
  {value:100, name:'Hello'},
]);
console.log(box.string());
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


