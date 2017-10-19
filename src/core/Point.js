/**
 * Created by hustcc.
 */

const invariant = require('../utils/invariant');
const types = require('../utils/types');
const Element = require('./Element');

/**
 * 一个点
 *
 * +
 *
 */
class Point extends Element {
  constructor(x, y) {
    super();
    invariant(
      types.isNumber(x) && types.isNumber(y),
      'TCharts: constructor props of Point should be (number, number), got (%s, %s).',
      types.typeOf(x),
      types.typeOf(y));

    this.x = x;
    this.y = y;
    this.box = {
      x1: this.x,
      y1: this.y,
      x2: this.x,
      y2: this.y,
    };

    this.initLayer();
  }

  clone = () => new Point(this.x, this.y);

  toString = () => `Point(${this.x}, ${this.y})`;

  draw = (options = { fill: '+' }) => {
    this.layer.ascii = [[options.fill]];
    return this.layer;
  };

  get CLASSNAME() {
    return 'Point';
  }
}

module.exports = Point;
