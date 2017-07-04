/**
 * Created by hustcc.
 */

const iu = require('immutability-util');
const WordWidth = require('word-width');
const round = require('fixed-round');
const Chart = require('./Chart');
const invariant = require('../utils/invariant');
const types = require('../utils/types');
const RectText = require('../core/RectText');
const Point = require('../core/Point');

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
  constructor(rate = 1.2) {
    super(0, 0); // table 的宽高有内容自动伸缩
    this.rate = rate; // 比例，比如文字宽度为10，则表格 cell 宽度为 12
  }

  // 通过内容计算每一列的宽高
  _calColSizes = (data, row, col) => {
    const sizes = new Array(col).fill(0);
    data.forEach((d) => {
      sizes.map((s, i) => Math.max(WordWidth(d[i]), s));
    });
    // 乘以 rate
    sizes.map(s => round(s * this.rate));
    return sizes;
  };

  _getRowAndCol = (data) => {
    const row = data.length;
    let col = 0;
    data.forEach((d) => {
      col = Math.max(col, d.length);
    });

    // 数据不能为零长度
    invariant(
      row !== 0 && col !== 0,
      `TCharts: data of \`Table\` chart should be type of matrix Array, 
      and can not be zero row or column. Got row: %s, column: %s.`,
      row,
      col
    );
    return {
      row,
      col,
    };
  };

  // 填充数据（对于有空缺的数据）
  _fullFillData = (data, row, col) => {
    const iuData = iu(data);
    // 遍历来填充数据
    data.forEach((d, index) => {
      if (col > d.length) {
        // 补充一些空的文本
        iuData.$push([index], new Array(col - d.length).fill(''));
      }
    });
    return iuData.value();
  };

  _calTableSizes = (colSizes, row, col) => {
    const height = row * 2 + 1;
    const width = col + 1 + colSizes.reduce((r, ele) => r + ele);
    return {
      width,
      height,
    };
  };

  setData = (data) => {
    invariant(
      types.isArray(data),
      'TCharts: data of `Table` chart should be type of matrix Array.'
    );
    const { row, col } = this._getRowAndCol(data);
    const updatedData = this._fullFillData(data, row, col);
    console.log(updatedData);
    this.data = updatedData;

    const colSizes = this._calColSizes(this.data, row, col);
    const { width, height } = this._calTableSizes(colSizes, row, col);

    this.resetSize(width, height);
    this.generateLayer(colSizes, row, col);
  };

  /**
   * 具体 table 的实现
   */
  generateLayer = (colSizes, row, col) => {
    const rectTexts = []; // 非常多有的 rectText 实例
    let startX = 0;
    let startY = 0;

    for (let i = 0; i < row; i += 1) {
      for (let j = 0; j < col; j += 1) {
        console.log(row, col);
        rectTexts.push(new RectText(
          new Point(startX, startY),
          new Point(startX + colSizes[j] + 1, startY + 2),
          this.data[i][j]).draw());

        startX += (colSizes[j] + 1);
      }
      startY += 2;
    }
    return this.layer.mergeArray(rectTexts);
  }
}

module.exports = Table;
