/**
 * Created by hustcc.
 */

const Chart = require('./Chart');
const invariant = require('../utils/invariant');
const types = require('../utils/types');
const Axis = require('../core/Axis');
const Point = require('../core/Point');
const RectText = require('../core/RectText');

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

  setData = (data) => {
    invariant(
      types.isArray(data),
      'TCharts: data of `Bar` chart should be type of Array.'
    );
    this.data = data;
    this.generateLayer();
  };

  /**
   * 具体图表的实现
   */
  generateLayer = () => {
    // 1. 计算最大的值
    const valueLst = this.data.map(ele => ele.value);
    const maxValue = Math.max(...valueLst);

    // 2. 计算每个数值所占高度
    this.data.forEach((ele) => {
      ele.width = Math.round((ele.value / maxValue) * (this.width - 4));
      ele.text = `${ele.name} ${ele.value}`;
    });

    // 3. 绘制坐标轴图层
    const point0 = new Point(0, 0);
    const pointX = new Point(this.width, 0);
    const pointY = new Point(0, this.height);
    const axisLayer = new Axis(point0, pointX, pointY).draw();

    // 4. 绘制矩形图层
    const step = Math.round((this.height - 1) / (2 * this.data.length));
    const rectLayers = this.data.map((ele, index) => {
      const startPoint = new Point(0, (2 * index + 1) * step);
      const endPoint = new Point(ele.width, (2 * index + 2) * step);
      return new RectText(startPoint, endPoint, ele.text).draw();
    });

    // 5. 合并图层
    let layers = [];
    layers.push(axisLayer);
    layers = layers.concat(rectLayers);

    this.layer.mergeArray(layers);
  }
}

module.exports = HBar;
