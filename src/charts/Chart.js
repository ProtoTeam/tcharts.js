/**
 * Created by hustcc.
 */

const invariant = require('../utils/invariant');
const Layer = require('../core/Layer');

/**
 * 图表的基类
 * 1. 拥有画布的宽高属性
 * 2. 可以设置图形的 option 配置
 * 3. 拥有将图层变成字符串的能力 print();
 * 4. 拥有一个图层，这个是最最终图层
 */
class Chart {
  constructor(width, height) {
    this.width = width;
    this.height = height;
    // 创建一个空的图层
    this.layer = Layer.emptyInstance({
      x1: 0,
      y1: 0,
      x2: this.width,
      y2: this.height,
    });
    this.data = [];
  }

  /**
   * 设置图标的 data
   * @param data
   */
  // eslint-disable-next-line
  setData = (data) => {
    invariant(false, 'TCharts: Chart\'s method `setData` should be implemented by children Class.');
  };

  // 返回图表的文本，可以直接用脑输出
  string = () => this.layer.string();

  // 返回图表的文本数组，逐行打印就可以显示了
  array = () => this.layer.array();

  generateLayer = () => {
    invariant(false, 'TCharts: Chart\'s method `generateLayer` should be implemented by children Class.');
  };

  // toString = () => {
  //   invariant(false, 'TCharts: Chart\'s method `toString` should be implemented by children Class.');
  // };
}

module.exports = Chart;
