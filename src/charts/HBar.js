/**
 * Created by hustcc.
 */

const VT = require('variable-type');
const Chart = require('./Chart');
const invariant = require('../utils/invariant');
const { round } = require('../utils/number');
const Axis = require('../core/Axis');
const Point = require('../core/Point');
const Rect = require('../core/Rect');
const Text = require('../core/Text');
const { HBAR_DATA_TYPE } = require('../const');

/**
 * 横向柱形图
 *
 * ^
 * |
 * +--------------------------+
 * |           A:70           |
 * +--------------------------+
 * |
 * |
 * +-----------------+
 * |      B:30       |
 * +-----------------+
 * |
 * |
 * +---------------------+
 * |         C:50        |
 * +---------------------+
 * |
 * +---+---+----+---+----+---+----->
 *
 */
class HBar extends Chart {
  constructor(minHeight = 8, widthRate = 3) {
    super(0, 0);
    this.minHeight = minHeight;
    this.widthRate = widthRate; // 高度 / 宽度比例
    this.barHeight = 1;
  }

  setData = (data) => {
    invariant(
      VT.check(data, HBAR_DATA_TYPE),
      'TCharts: data of `HBar` chart should be type of Array.'
    );
    this.data = data;
    // 计算宽高
    let height = (this.data.length * 2 + 1) * (this.barHeight + 1);
    height = Math.max(height, this.minHeight);
    const width = round(height * this.widthRate);
    this.resetSize(width, height);
    this.generateLayer();
  };

  /**
   * 具体图表的实现
   */
  generateLayer = () => {
    // 1. 构造 text 键值
    let maxValue = 0;
    this.data.forEach((d) => {
      d.text = `${d.name}:${d.value}`;
      maxValue = Math.max(maxValue, d.value);
    });

    // 2. 计算每个数值的柱形图宽度
    this.data.forEach((d) => {
      d.width = round((d.value / maxValue) * (this.width - 1)); // -1 图形美观
    });

    // 3. 绘制坐标轴图层
    const axisLayer = new Axis(
      new Point(0, 0),
      new Point(this.width, 0),
      new Point(0, this.height)
    ).draw();

    // 4. 绘制矩形图层
    const heightStep = round(this.height / (this.data.length * 2 + 1));
    const rectLayers = this.data.map((d, i) => new Rect(
      new Point(0, heightStep * (i * 2 + 1)),
      new Point(d.width, heightStep * (i * 2 + 2))).draw()
    );

    // 5. 绘制文字图层(局左对齐)
    const textLayers = this.data.map((d, i) => {
      if (d.text.length >= d.width) {
        // 文本长度超过柱子长度，在在柱形右边显示
        return new Text(
          new Point(d.width + 1, heightStep * (i * 2 + 1) + 1),
          d.text).draw();
      }
      // 居右显示
      return new Text(
        new Point(d.width - 1, heightStep * (i * 2 + 1) + 1),
        d.text,
        'right').draw();
    });

    // 6. 合并图层
    let layers = [];
    layers.push(axisLayer);
    layers = layers.concat(rectLayers);
    layers = layers.concat(textLayers);

    this.layer.mergeArray(layers);
  }
}

module.exports = HBar;
