/**
 * Created by hustcc on 17/6/21.
 */

const what = require('what.js');
// eslint-disable-next-line
const { Box, Bar, HBar, Table } = require('../src/');
// eslint-disable-next-line
const { Axis, Line, Point, Rect, Text, RectText } = require('../src/core/');


describe('Testcases of tcharts.js', () => {
  describe('1. Box chart.', () => {
    test('1. draw a box chart.', () => {
      const box = new Box(60, 20);
      box.setData([
        {value:100, name:'A'},
        {value:100, name:'B'},
        {value:100, name:'C'},
        {value:100, name:'你好'},
      ]);
      console.log(box.string());
      const r = `
+--------------+----------------------+---------------------+
|              |                      |                     |
|              |                      |                     |
|              |                      |                     |
|              |                      |                     |
|              |                      |                     |
|              |                      |                     |
|              |        C: 25%        |      你好: 25%      |
|              |                      |                     |
|              |                      |                     |
|    A: 25%    |                      |                     |
|              |                      |                     |
|              |                      |                     |
|              +----------------------+---------------------+
|              |                                            |
|              |                                            |
|              |                                            |
|              |                   B: 25%                   |
|              |                                            |
|              |                                            |
+--------------+--------------------------------------------+`.trim();
      expect(box.string()).toBe(r);
    });
  });

  describe('2. Bar chart.', () => {
    test('1. draw a bar chart.', () => {
      const bar = new Bar(60, 20);
      bar.setData([
        {value:100, name:'A'},
        {value:45, name:'B'},
        {value:70, name:'C'},
        {value:30, name:'D'},
      ]);
      console.log(bar.string());
      const r = `^                                                            
|     100                                                    
|      +------+                                              
|      |      |                                              
|      |      |                                              
|      |      |                                              
|      |      |                    70                        
|      |      |                    +------+                  
|      |      |                    |      |                  
|      |      |                    |      |                  
|      |      |                    |      |                  
|      |      |      45            |      |                  
|      |      |      +------+      |      |                  
|      |      |      |      |      |      |                  
|      |      |      |      |      |      |      30          
|      |      |      |      |      |      |      +------+    
|      |      |      |      |      |      |      |      |    
|      |      |      |      |      |      |      |      |    
|      |      |      |      |      |      |      |      |    
+------+------+------+------+------+------+------+------+--->
       A             B             C             D           `;
      expect(bar.string()).toBe(r);
      expect(what(new Bar().string())).toEqual('string');
      expect(what(new Bar().array())).toEqual('array');
    });
  });

  describe('3. HBar chart.', () => {
    test('1. draw a hbar chart.', () => {
      const hbar = new HBar(60, 20);
      hbar.setData([
        {value:100, name:'A'},
        {value:45, name:'B'},
        {value:70, name:'C'},
        {value:30, name:'D'},
      ]);
      console.log(hbar.string());
      const r = `^                                                            
|                                                            
|                                                            
|                                                            
+----------------+                                           
|      D 30      |                                           
+----------------+                                           
|                                                            
+--------------------------------------+                     
|                 C 70                 |                     
+--------------------------------------+                     
|                                                            
+------------------------+                                   
|          B 45          |                                   
+------------------------+                                   
|                                                            
+-------------------------------------------------------+    
|                         A 100                         |    
+-------------------------------------------------------+    
|                                                            
+----------------------------------------------------------->`;
      expect(hbar.string()).toBe(r);
      expect(what(new HBar().string())).toEqual('string');
      expect(what(new HBar().array())).toEqual('array');
    });
  });

  describe('4. Table chart.', () => {
    test('1. draw a table chart.', () => {
      // TODO
      expect(what(new Table().string())).toEqual('string');
      expect(what(new Table().array())).toEqual('array');
    });
  });

  describe('5. Point element.', () => {
    test('1. draw a point element.', () => {
      const pointLayer = new Point(50, 50).draw();
      expect(pointLayer.box).toEqual({
        x1: 50,
        y1: 50,
        x2: 50,
        y2: 50,
      });
      expect(pointLayer.array()).toEqual([['+']]);
    });
  });

  describe('6. Line element.', () => {
    test('1. draw a line element.', () => {
      let start = new Point(0, 0);
      let end = new Point(0, 50);
      let lineLayer = new Line(start, end).draw();

      expect(lineLayer.box).toEqual({
        x1: 0,
        y1: 0,
        x2: 0,
        y2: 50,
      });
      expect(lineLayer.array()).toEqual(new Array(51).fill(new Array(1).fill('|')));

      start = new Point(0, 0);
      end = new Point(50, 0);
      lineLayer = new Line(start, end).draw();

      expect(lineLayer.box).toEqual({
        x1: 0,
        y1: 0,
        x2: 50,
        y2: 0,
      });
      expect(lineLayer.array()).toEqual(new Array(1).fill(new Array(51).fill('-')));
    });
  });

  describe('7. Text element.', () => {
    test('1. draw a text element.', () => {
      const text = 'Hello world.';
      const p = new Point(40, 50);
      const textLayer = new Text(p, text).draw();
      expect(textLayer.box).toEqual({
        x1: 35,
        y1: 50,
        x2: 46,
        y2: 50,
      });
      const r = new Array(12).fill('');
      r[0] = text;
      expect(textLayer.array()).toEqual([
        r
      ]);
    });
  });

  describe('8. Rect element.', () => {
    test('1. draw a rect element.', () => {
      const start = new Point(0, 0);
      const end = new Point(4, 3);
      const rectLayer = new Rect(start, end).draw();

      expect(rectLayer.box).toEqual({
        x1: 0,
        y1: 0,
        x2: 4,
        y2: 3,
      });
      expect(rectLayer.array()).toEqual([
        '+---+'.split(''),
        '|   |'.split(''),
        '|   |'.split(''),
        '+---+'.split(''),
      ]);
    });
  });

  describe('9. RectText element.', () => {
    test('1. draw a rect-text element.', () => {
      const start = new Point(0, 0);
      const end = new Point(10, 5);
      const rectTextLayer = new RectText(start, end, 'TC').draw();

      expect(rectTextLayer.box).toEqual({
        x1: 0,
        y1: 0,
        x2: 10,
        y2: 5,
      });
      expect(rectTextLayer.array()).toEqual([
        '+---------+'.split(''),
        '|         |'.split(''),
        '|         |'.split(''),
        ['|', ' ', ' ', ' ', ' ', 'TC', '', ' ', ' ', ' ', '|'],
        '|         |'.split(''),
        '+---------+'.split(''),
      ]);
    });
  });

  describe('10. Axis element.', () => {
    test('1. draw a axis element.', () => {
      const point0 = new Point(0, 0);
      const pointX = new Point(20, 0);
      const pointY = new Point(0, 5);
      const axis = new Axis(point0, pointX, pointY);
      const axisLayer = axis.draw();

      expect(axisLayer.box).toEqual({
        x1: 0,
        y1: 0,
        x2: 20,
        y2: 5,
      });
      expect(axisLayer.array()).toEqual([
        '^                    '.split(''),
        '|                    '.split(''),
        '|                    '.split(''),
        '|                    '.split(''),
        '|                    '.split(''),
        '+------------------->'.split(''),
      ]);
      console.log(axisLayer.string());
    });
  });
});
