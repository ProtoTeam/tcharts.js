/**
 * Created by hustcc.
 */

const invariant = require('../utils/invariant');
const types = require('../utils/types');
const { fillMatrix } = require('../utils/array');

/**
 * 定义一个图层，图层包括一个范围和填充的内容
 * 图层是最终将用于显示的部分，图层可以通过 merge 合并
 * 最终显示在控制台的仅仅只有一个图层
 * 这个图层是有很多的小元素图层合并而来
 *
 * 如何设计图层，更好划分图层，将提高 merge 性能
 *
 * 图层也就是 Element 元素 draw 方法的返回值
 */
class Layer {
  constructor(box = { x1: 0, y1: 0, x2: 0, y2: 0 }, ascii = [], zIndex = 0) {
    invariant(
      types.isObject(box) && types.isArray(ascii) && types.isNumber(zIndex),
      'TCharts: constructor props of Layer should be (object, array, number), got (%s, %s, %s).',
      types.typeof(box),
      types.typeof(ascii),
      types.typeof(zIndex));

    this.box = box;
    this.ascii = ascii;
    this.zIndex = zIndex;
  }

  static emptyInstance(box, zIndex = 0) {
    const width = box.x2 - box.x1 + 1;
    const height = box.y2 - box.y1 + 1;

    const ascii = fillMatrix(height, width, ' ');
    return new Layer(box, ascii, zIndex);
  }

  // box 盒模型是不是大于
  gt = (layer, includeEqual = true) => {
     if (includeEqual) {
       if (
         this.box.x1 <= layer.box.x1 &&
         this.box.y1 <= layer.box.y1 &&
         this.box.x2 >= layer.box.x2 &&
         this.box.y2 >= layer.box.y2) {
         return true;
       }
       return false;
     }
    if (
      this.box.x1 < layer.box.x1 &&
      this.box.y1 < layer.box.y1 &&
      this.box.x2 > layer.box.x2 &&
      this.box.y2 > layer.box.y2) {
      return true;
    }
     return false;
  };

  /**
   * 按顺序合并另外的 layers
   * @param layer
   */
  merge = (...layers) => this.mergeArray(layers);

  /**
   * 合并一个 layer
   * @param layer
   */
  mergeOne = (layer) => {
    // 校验：前提条件是，this 的范围肯定大于 layer
    invariant(
      this.gt(layer),
      'TCharts: layer\'box should be greater then layer which will be merged.');

    // 算法
    const { x1, y1, x2, y2 } = layer.box;
    const { x1: thisX1, y1: thisY1 } = this.box;
    // box 的偏移量
    let i1;
    let i2;
    for (let i = x1; i <= x2; i += 1) {
      // 减少计算量
      i1 = i - thisX1;
      i2 = i - x1;
      for (let j = y1; j <= y2; j += 1) {
        this.ascii[j - thisY1][i1] = layer.ascii[j - y1][i2];
      }
    }
    return this;
  };

  /**
   * 合并一个 layer
   * @param layer
   */
  mergeArray = (layers) => {
    // 首先先按照 zIndex 升序排列，越大越在上层
    // chrome 下 sort 方法可能为不稳定，这点需要注意。
    // layers.sort((x, y) => x - y); // TODO :暂时不要 zIndex 排序特性
    // 排序之后遍历，先绘制底层的，后使用上层覆盖
    layers.forEach((layer) => {
      this.mergeOne(layer);
    });
    return this;
  };

  /**
   * 返回图表的文本，可以直接用脑输出
   * @returns {string}
   */
  string = () => {
    const asciiArray = this.ascii;
    // 逆向遍历
    const rst = [];
    for (let i = asciiArray.length - 1; i >= 0; i -= 1) {
      rst.push(`${asciiArray[i].join('')}`);
    }
    return rst.join('\n');
  };

  /**
   * 返回图表的文本数组，逐行打印就可以显示了
   */
  array = () => this.ascii.slice().reverse();
}

module.exports = Layer;
