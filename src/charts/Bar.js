/**
 * Created by hustcc.
 */

const Chart = require('./Chart');

/**
 * 柱形图
 *
 * ^
 * |    70
 * |   +---+
 * |   |   |
 * |   |   |              50
 * |   |   |             +---+
 * |   |   |             |   |
 * |   |   |             |   |
 * |   |   |     30      |   |
 * |   |   |    +---+    |   |
 * |   |   |    |   |    |   |
 * |   |   |    |   |    |   |
 * |   |   |    |   |    |   |
 * +---+---+----+---+----+---+----->
 *       A        B        C
 *
 */
class Bar extends Chart {
  constructor(width = 100, height = 50) {
    super(width, height);
  }
}

module.exports = Bar;
