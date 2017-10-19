/**
 * Created by hustcc on 17/6/21.
 */

// test for library and test
// eslint-disable-next-line
const { Box, Bar, HBar, Table } = require(process.env.NODE_ENV !== 'production' ? '../src/' : '../');
const { Axis, Line, Point, Rect, Text, RectText } = require('../src/core/');
const StringUtils = require('../src/utils/string');
const NumberUtils = require('../src/utils/number');


describe('Testcases of tcharts.js', () => {
  describe('1. Point element.', () => {
    require('./point')(Point);
  });

  describe('2. Line element.', () => {
    require('./line')(Point, Line);
  });

  describe('3. Text element.', () => {
    require('./text')(Point, Text);
  });

  describe('4. Rect element.', () => {
    require('./rect')(Point, Rect);
  });

  describe('5. RectText element.', () => {
    require('./recttext')(Point, RectText);
  });

  describe('6. Axis element.', () => {
    require('./axis')(Point, Axis);
  });

  describe('7. Box chart.', () => {
    require('./box')(Box);
  });

  describe('8. Bar chart.', () => {
    require('./bar')(Bar);
  });

  describe('9. HBar chart.', () => {
    require('./hbar')(HBar);
  });

  describe('10. Table chart.', () => {
    require('./table')(Table);
  });

  describe('11. utils.', () => {
    require('./utils')(StringUtils, NumberUtils);
  });
});
