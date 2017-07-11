/**
 * Created by hustcc.
 * Contract: i@hust.cc
 */

const round = require('fixed-round');

const center = (x1, x2) => round((x1 + x2) / 2);

const floorCenter = (x1, x2) => Math.floor((x1 + x2) / 2);

const toPercent = (number, fixed = 2) => `${round(number, fixed + 2) * 100}%`;


module.exports = {
  round,
  center,
  floorCenter,
  toPercent,
};
