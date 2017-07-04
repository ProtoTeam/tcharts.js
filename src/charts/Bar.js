/**
 * Created by hustcc.
 */

const Chart = require('./Chart');
const invariant = require('../utils/invariant');
const types = require('../utils/types');
const Axis = require('../core/Axis');
const Point = require('../core/Point');
const Text = require('../core/Text');
const Rect = require('../core/Rect');

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
 * data 结构：
 [
   {value:335, name:'直接访问'},
   {value:310, name:'邮件营销'},
   {value:274, name:'联盟广告'},
   {value:235, name:'视频广告'},
   {value:400, name:'搜索引擎'},
 ]
 *
 */
class Bar extends Chart {
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
      ele.height = Math.round((ele.value / maxValue) * (this.height - 2));
    });

    // 3. 绘制坐标轴图层
    const point0 = new Point(0, 1);
    const pointX = new Point(this.width, 1);
    const pointY = new Point(0, this.height);
    const axisLayer = new Axis(point0, pointX, pointY).draw();

    // 4. 绘制矩形图层
    const step = Math.round((this.width - 2) / (2 * this.data.length));
    const rectLayers = this.data.map((ele, index) => {
      const startPoint = new Point((2 * index + 1) * step, 1);
      const endPoint = new Point((2 * index + 2) * step, ele.height);
      return new Rect(startPoint, endPoint).draw();
    });

    // 5. 绘制文字图层
    const nameLayer = this.data.map((ele, index) => {
      const point = new Point((2 * index + 1) * step, 0);
      return new Text(point, ele.name).draw();
    });

    // 6. 绘制数据图层
    const dataLayer = this.data.map((ele, index) => {
      const point = new Point((2 * index + 1) * step, ele.height + 1);
      return new Text(point, ele.value.toString()).draw();
    });

    // 7. 合并图层
    let layers = [];
    layers.push(axisLayer);
    layers = layers.concat(rectLayers);
    layers = layers.concat(nameLayer);
    layers = layers.concat(dataLayer);

    this.layer.mergeArray(layers);
  }
}

module.exports = Bar;
