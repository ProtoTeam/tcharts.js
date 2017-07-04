/**
 * Created by hustcc on 17/6/21.
 */


const { Box, Bar, HBar, Table } = require('../src/');
const { Axis, Line, Point, Rect, Text, RectText } = require('../src/core/');


describe('Testcases of tcharts.js', () => {
  describe('1. Box chart.', () => {
    require('./box')(Box);
  });

  describe('2. Bar chart.', () => {
    require('./bar')(Bar);
  });

  describe('3. HBar chart.', () => {
    require('./hbar')(HBar);
  });

  describe('4. Table chart.', () => {
    // require('./table')(Table);
  });

  describe('5. Point element.', () => {
    require('./point')(Point);
  });

  describe('6. Line element.', () => {
    require('./line')(Point, Line);
  });

  describe('7. Text element.', () => {
    require('./text')(Point, Text);
  });

  describe('8. Rect element.', () => {
    require('./rect')(Point, Rect);
  });

  describe('9. RectText element.', () => {
    require('./recttext')(Point, RectText);
  });

  describe('10. Axis element.', () => {
    require('./axis')(Point, Axis);
  });
});
