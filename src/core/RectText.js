/**
 * Created by hustcc.
 * Contract: i@hust.cc
 */

const invariant = require('../utils/invariant');
const types = require('../utils/types');
const Element = require('./Element');
const Point = require('./Point');
const Rect = require('./Rect');
const Text = require('./Text');

/**
 *  带边框的填充矩形，并且显示说明文本，在控制台下面，仅仅只能绘制四边形
 *
 *  +---------------------------+
 *  |                           |
 *  |            ABC            |
 *  |                           |
 *  |                           |
 *  +---------------------------+
 *
 */
class RectText extends Element {
  constructor(start, end, text) {
    super();
    // 参数必须是 point 类型的
    invariant(
      types.isPoint(start) && types.isPoint(end),
      'TCharts: constructor props of RectText should be (Point, Point, any), got (%s, %s, %s).',
      types.typeOf(start),
      types.typeOf(end),
      types.typeOf(text));
    // 校验通过，赋值属性
    this.start = start;
    this.end = end;
    this.text = text;
    this.box = {
      x1: Math.min(this.start.x, this.end.x),
      y1: Math.min(this.start.y, this.end.y),
      x2: Math.max(this.start.x, this.end.x),
      y2: Math.max(this.start.y, this.end.y),
    };

    this.initLayer();
  }

  clone = () => new RectText(this.start.clone(), this.end.clone(), this.text);

  toString = () => `RectText(${this.start}, ${this.end}, ${this.text})`;

  draw = () => {
    // 四个顶点
    const rect = new Rect(this.start, this.end);
    const center = this.center(); // 居中位置
    const text = new Text(new Point(center.x, center.y), this.text);

    // 合并图层
    return this.layer.merge(rect.draw(), text.draw());
  };

  get CLASSNAME() {
    return 'RectText';
  }
}

module.exports = RectText;
