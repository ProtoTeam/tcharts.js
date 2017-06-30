/**
 * Created by hustcc.
 */
const invariant = require('../utils/invariant');
const { floorCenter } = require('../utils/number');
const Layer = require('./Layer');
/**
 * 元素基类，像积木一样一层一层的搭建组件元素
 * 每隔元素都可以通过 draw 方法获得一个图层
 * 上层的元素是利用下层元素组合出来的，然后形成新的图层
 * 一层一层，直到形成最终的图表 charts
 *
 * 元素都有一个 box 结构（盒模型？）限定了元素的起始位置
 * 另外具有一个 z-index 属性，可以设置元素显示的层级
 *
 * 元素的 clone 可以直接获得一个相同的元素，引用不同
 */
class Element {
  constructor(zIndex = 0) {
    this.zIndex = zIndex; // TODO 用于控制渲染层级，后期可以用于重构渲染性能
    // box 限制了元素的起始结束点坐标，以
    this.box = { x1: 0, y1: 0, x2: 0, y2: 0 };
  }

  /**
   * 初始化空的 layer
   */
  initLayer = () => {
    this.layer = Layer.emptyInstance(this.box, this.zIndex);
  };

  setZIndex = (zIndex = 0) => {
    this.zIndex = zIndex;
  };

  /**
   * 获得中心点的坐标
   * @returns {{x: number, y: number}}
   */
  center = () => ({
    x: floorCenter(this.box.x1, this.box.x2),
    y: floorCenter(this.box.y1, this.box.y2),
  });

  /**
   * 获得元素的大小
   * @returns {{width: number, height: number}}
   */
  size = () => {
    const width = this.box.x2 - this.box.x1 + 1;
    const height = this.box.y2 - this.box.y1 + 1;
    return {
      width,
      height,
    };
  };

  clone = () => new Element();

  toString = () => {
    invariant(false, 'TCharts: Element\'s method `toString` should be implemented by children Class.');
  };


  /**
   * 绘制图形，产生图层，图层将用于最终的渲染
   * @param options { fill: '*', line: '-' }
   */
  draw = () => {
    invariant(false, 'TCharts: Element\'s method `draw` should be implemented by children Class.');
  };
}

module.exports = Element;
