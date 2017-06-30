/**
 * Created by hustcc.
 */

const Chart = require('./Chart');

/**
 * 横向柱形图
 *
 * ^
 * |
 * +--------------------------+
 * |           A 70           |
 * +--------------------------+
 * |
 * |
 * +-----------------+
 * |      B 30       |
 * +-----------------+
 * |
 * |
 * +---------------------+
 * |         C 50        |
 * +---------------------+
 * |
 * +---+---+----+---+----+---+----->
 *
 */
class HBar extends Chart {
  constructor(width = 100, height = 50) {
    super(width, height);
  }
}

module.exports = HBar;
