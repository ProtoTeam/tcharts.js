/**
 * Created by hustcc.
 * Contract: i@hust.cc
 */

module.exports = (Point, Text) => {
  test('1. draw a text element.', () => {
    const text = 'Hello world.';
    const p = new Point(40, 50);
    const textLayer = new Text(p, text).draw();
    expect(textLayer.box).toEqual({
      x1: 35,
      y1: 50,
      x2: 46,
      y2: 50,
    });
    const r = new Array(12).fill('');
    r[0] = text;
    expect(textLayer.array()).toEqual([
      r
    ]);
  });
};
