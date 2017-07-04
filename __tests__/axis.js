/**
 * Created by hustcc.
 * Contract: i@hust.cc
 */

module.exports = (Point, Axis) => {
  test('1. draw a axis element.', () => {
    const point0 = new Point(0, 0);
    const pointX = new Point(20, 0);
    const pointY = new Point(0, 5);
    const axis = new Axis(point0, pointX, pointY);
    const axisLayer = axis.draw();

    expect(axisLayer.box).toEqual({
      x1: 0,
      y1: 0,
      x2: 20,
      y2: 5,
    });
    expect(axisLayer.array()).toEqual([
      '^                    '.split(''),
      '|                    '.split(''),
      '|                    '.split(''),
      '|                    '.split(''),
      '|                    '.split(''),
      '+------------------->'.split(''),
    ]);
    console.log(axisLayer.string());
  });
};
