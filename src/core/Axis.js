/**
 * Created by hustcc.
 */

const invariant = require('../utils/invariant');
const types = require('../utils/types');
const Element = require('./Element');
const Line = require('./Line');

/**
 * 一个坐标轴系统，不带 x，y 文字
 *
 * ^
 * |
 * |
 * |
 * |
 * |
 * |
 * |
 * |
 * |
 * +------------------------------>
 *
 */
class Axis extends Element {
  /**
   * 构造方法
   * @param point0 零点
   * @param pointX 横向轴
   * @param pointY 纵向轴
   */
  constructor(point0, pointX, pointY) {
    super();
    invariant(
      types.isPoint(point0) && types.isPoint(pointX) && types.isPoint(pointY),
      'TCharts: constructor props of Axis should be (Point, Point, Point), got (%s, %s, %s).',
      types.typeof(point0),
      types.typeof(pointX),
      types.typeof(pointY));

    invariant(
      point0.y === pointX.y,
      'TCharts: constructor props `pointX` of Axis should be an Horizontal line with `point0`.');

    invariant(
      point0.x === pointY.x,
      'TCharts: constructor props `pointY` of Axis should be an Horizontal line with `point0`.');

    this.point0 = point0;
    this.pointX = pointX;
    this.pointY = pointY;
    this.box = {
      x1: this.point0.x,
      y1: this.point0.y,
      x2: this.pointX.x,
      y2: this.pointY.y,
    };

    this.initLayer();
  }

  clone = () => new Axis(this.point0, this.pointX, this.pointY);

  toString = () => `Axis(${this.point0}, ${this.pointX}, ${this.pointY})`;

  draw = () => {
    // X 轴图层
    const lineXLayer = new Line(this.point0, this.pointX).draw();
    // Y 轴图层
    const lineYLayer = new Line(this.point0, this.pointY).draw();

    // 后合并点，可以提高性能，同时不会导致层覆盖问题
    return this.layer.merge(
      lineXLayer,                      // x 轴
      lineYLayer,                      // y 轴
      this.point0.draw({ fill: '+' }), // 左边圆点
      this.pointX.draw({ fill: '>' }), // x 轴箭头
      this.pointY.draw({ fill: '^' })  // y 轴箭头
    );
  };

  get CLASSNAME() {
    return 'Axis';
  }
}

module.exports = Axis;
