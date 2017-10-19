/**
 * Created by hustcc.
 */

const Chart = require('./Chart');
const invariant = require('../utils/invariant');
const { round } = require('../utils/number');
const Axis = require('../core/Axis');
const Point = require('../core/Point');
const Text = require('../core/Text');
const Rect = require('../core/Rect');
const { BAR_DATA_TYPE } = require('../const');

/**
 * 柱形图
 *
 * ^
 * |    A:70
 * |   +---+
 * |   |   |
 * |   |   |              C:50
 * |   |   |             +---+
 * |   |   |             |   |
 * |   |   |             |   |
 * |   |   |     B:30    |   |
 * |   |   |    +---+    |   |
 * |   |   |    |   |    |   |
 * |   |   |    |   |    |   |
 * |   |   |    |   |    |   |
 * +---+---+----+---+----+---+----->
 *
 *
 * data 结构：
 [
   {value:335, name:'A'},
   {value:310, name:'B'},
   {value:274, name:'C'},
   {value:235, name:'D'},
   {value:400, name:'E'},
 ]
 *
 */
class Bar extends Chart {
  constructor(minWidth = 20, heightRate = 0.4) {
    super(0, 0);
    this.minWidth = minWidth;
    this.heightRate = heightRate; // 高度 / 宽度比例
    this.barWidth = 2;
  }

  setData = (data) => {
    invariant(
      BAR_DATA_TYPE.check(data),
      'TCharts: data of `Bar` chart should be type of Array.'
    );
    this.data = data;
    // 计算宽高
    let width = (this.data.length * 2 + 1) * (this.barWidth + 1);
    width = Math.max(width, this.minWidth);
    const height = round(width * this.heightRate);
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

    // 2. 计算每个数值的柱形图高度d
    this.data.forEach((d) => {
      d.height = round((d.value / maxValue) * (this.height - 2)); // -2 是为了显示文本
    });

    // 3. 绘制坐标轴图层
    const axisLayer = new Axis(
      new Point(0, 0),
      new Point(this.width, 0),
      new Point(0, this.height)
    ).draw();

    // 4. 绘制矩形图层
    const widthStep = round(this.width / (this.data.length * 2 + 1));
    const rectLayers = this.data.map((d, i) => new Rect(
      new Point(widthStep * (i * 2 + 1), 0),
      new Point(widthStep * (i * 2 + 2), d.height)).draw()
    );

    // 5. 绘制文字图层(局左对齐)
    const textLayers = this.data.map((d, i) => new Text(
      new Point(widthStep * (i * 2 + 1), d.height + 1), // 文本高度为 1
      d.text,
      'left').draw()
    );

    // 6. 合并图层
    let layers = [];
    layers.push(axisLayer);
    layers = layers.concat(rectLayers);
    layers = layers.concat(textLayers);

    this.layer.mergeArray(layers);
  }
}

module.exports = Bar;
