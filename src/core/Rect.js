/**
 * Created by hustcc.
 */

const invariant = require('../utils/invariant');
const types = require('../utils/types');
const Element = require('./Element');
const Point = require('./Point');
const Line = require('./Line');
// const Layer = require('./Layer');

/**
 *  带边框的填充矩形，在控制台下面，仅仅只能绘制四边形
 *
 *  +---------------------------+
 *  |                           |
 *  |                           |
 *  |                           |
 *  |                           |
 *  +---------------------------+
 *
 */
class Rect extends Element {
  constructor(start, end) {
    super();
    // 参数必须是 point 类型的
    invariant(
      types.isPoint(start) && types.isPoint(end),
      'TCharts: constructor props of Rect should be (Point, Point), got (%s, %s).',
      types.typeof(start),
      types.typeof(end));
    // 校验通过，赋值属性
    this.start = start;
    this.end = end;
    this.box = {
      x1: Math.min(this.start.x, this.end.x),
      y1: Math.min(this.start.y, this.end.y),
      x2: Math.max(this.start.x, this.end.x),
      y2: Math.max(this.start.y, this.end.y),
    };

    this.initLayer();
  }

  clone = () => new Rect(this.start.clone(), this.end.clone());

  toString = () => `Rect(${this.start}, ${this.end})`;

  draw = () => {
    // 四个顶点
    const points = [
      new Point(this.box.x1, this.box.y1),
      new Point(this.box.x2, this.box.y1),
      new Point(this.box.x2, this.box.y2),
      new Point(this.box.x1, this.box.y2),
    ];
    const corners = points.map(p => p.draw());

    // 四条边
    const lines = [
      new Line(points[0], points[1]).draw(),
      new Line(points[1], points[2]).draw(),
      new Line(points[2], points[3]).draw(),
      new Line(points[3], points[0]).draw(),
    ];

    // 合并图层部分
    return this.layer.mergeArray(lines.concat(corners));
  };
  get CLASSNAME() {
    return 'Rect';
  }
}

module.exports = Rect;
