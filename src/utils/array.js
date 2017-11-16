/**
 * Created by hustcc.
 * Contract: i@hust.cc
 */

'use strict';


/**
 * fastest way to fill a array
 * here: https://jsperf.com/zeroarrayjs/10
 * @param len
 * @param val
 * @returns {Array}
 */
const fillArray = (len, val) => {
  const res = new Array(len);
  for (let i = 0; i < len; i += 1) {
    res[i] = val;
  }
  return res;
};

/**
 * Return a of val
 *
 * @param  {Number} `row` number of rows
 * @param  {Number} `col` number of columns
 * @param  {*} `val`
 * @return {*[][]} `matrix` of val
 */
const fillMatrix = (row, col, val) => {
  const res = new Array(row);
  for (let i = 0; i < row; i += 1) {
    res[i] = fillArray(col, val);
  }
  return res;
};

/**
 * deep clone array
 * @param arr
 * @returns {*}
 */
const arrayClone = (arr) => {
  let i;
  let copy;
  if (Array.isArray(arr)) {
    copy = arr.slice(0);
    for (i = 0; i < copy.length; i += 1) {
      copy[i] = arrayClone(copy[i]);
    }
    return copy;
  }
  return arr;
};

module.exports = {
  fillArray,
  fillMatrix,
  arrayClone,
};
