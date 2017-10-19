/**
 * Created by hustcc.
 */

const invariant = require('../utils/invariant');
const types = require('../utils/types');
const Element = require('./Element');
const { fillMatrix } = require('../utils/array');
// const Layer = require('./Layer');

/**
 * 一个线段，包括横线和竖线
 *
 * 横线
 * -------------------
 *
 * 竖线
 * |
 * |
 * |
 * |
 * |
 * |
 *
 */
class Line extends Element {
  constructor(start, end) {
    super();
    // 参数必须是 point 类型的
    invariant(
      types.isPoint(start) && types.isPoint(end),
      'TCharts: constructor props of Line should be (Point, Point), got (%s, %s).',
      types.typeOf(start),
      types.typeOf(end));
    // 控制台模式下，仅仅只能输入横线或者竖线
    invariant(
      start.x === end.x || start.y === end.y,
      'TCharts: we can only draw Horizontal / Vertical line in terminal. got(%s, %s).',
      start,
      end);
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

  clone = () => new Line(this.start.clone(), this.end.clone());

  toString = () => `Line(${this.start}, ${this.end})`;

  draw = () => {
    const { width, height } = this.size();
    const isHorizontal = this.box.y1 === this.box.y2;

    let ascii = null;
    if (isHorizontal) {
      // 横向线
      ascii = fillMatrix(1, width, '-');
    } else {
      // 纵向线
      ascii = fillMatrix(height, 1, '|');
    }
    this.layer.ascii = ascii;
    return this.layer;
  };

  get CLASSNAME() {
    return 'Line';
  }
}

module.exports = Line;
