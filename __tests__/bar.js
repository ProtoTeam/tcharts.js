/**
 * Created by hustcc.
 * Contract: i@hust.cc
 */

const what = require('what.js');

module.exports = (Bar) => {
  test('1. draw a bar chart.', () => {
    // TODO
    expect(what(new Bar().string())).toEqual('string');
    expect(what(new Bar().array())).toEqual('array');
  });
};
