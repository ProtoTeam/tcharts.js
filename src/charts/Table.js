/**
 * Created by hustcc.
 */

const Chart = require('./Chart');


/**
 * 表格
 *
 *
 * +----+----------+----------------+
 * | id |   name   |    birthday    |
 * +----+----------+----------------+
 * | #1 |  xiaowei |   1992-08-01   |
 * +----+----------+----------------+
 * | #2 |  hello   |   1992-09-20   |
 * +----+----------+----------------+
 * | #3 | tcharts  |   2017-06-27   |
 * +----+----------+----------------+
 * | #4 |     d    |                |
 * +----+----------+----------------+
 *
 *
 *
 */
class Table extends Chart {
  constructor(width = 100, height = 50) {
    super(width, height);
    this.width = width;
  }
}

module.exports = Table;
