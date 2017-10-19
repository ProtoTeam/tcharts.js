/**
 * Created by hustcc.
 * Contract: i@hust.cc
 */

module.exports = (Point, RectText) => {
  test('1. draw a rect-text element.', () => {
    const start = new Point(0, 0);
    const end = new Point(10, 5);
    const reactText = new RectText(start, end, 'TC');
    const rectTextLayer = reactText.draw();

    expect(rectTextLayer.box).toEqual({
      x1: 0,
      y1: 0,
      x2: 10,
      y2: 5,
    });
    expect(rectTextLayer.array()).toEqual([
      '+---------+'.split(''),
      '|         |'.split(''),
      '|         |'.split(''),
      ['|', ' ', ' ', ' ', ' ', 'TC', '', ' ', ' ', ' ', '|'],
      '|         |'.split(''),
      '+---------+'.split(''),
    ]);

    expect(reactText.clone().CLASSNAME).toBe('RectText');
    reactText.toString();
  });
};
