/**
 * Created by hustcc.
 * Contract: i@hust.cc
 */


module.exports = (Point) => {
  test('1. draw a point element.', () => {
    const pointLayer = new Point(50, 50).draw();
    expect(pointLayer.box).toEqual({
      x1: 50,
      y1: 50,
      x2: 50,
      y2: 50,
    });
    expect(pointLayer.array()).toEqual([['+']]);
  });
};
