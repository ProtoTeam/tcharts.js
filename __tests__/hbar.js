/**
 * Created by hustcc.
 * Contract: i@hust.cc
 */

const what = require('what.js');

module.exports = (HBar) => {
  test('1. draw a hbar chart.', () => {
    // TODO
    expect(what(new HBar().string())).toEqual('string');
    expect(what(new HBar().array())).toEqual('array');
  });
};
