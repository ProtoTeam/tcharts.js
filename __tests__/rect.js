/**
 * Created by hustcc.
 * Contract: i@hust.cc
 */


module.exports = (Point, Rect) => {
  test('1. draw a rect element.', () => {
    const start = new Point(0, 0);
    const end = new Point(4, 3);
    const rect = new Rect(start, end);
    const rectLayer = rect.draw();

    expect(rectLayer.box).toEqual({
      x1: 0,
      y1: 0,
      x2: 4,
      y2: 3,
    });
    expect(rectLayer.array()).toEqual([
      '+---+'.split(''),
      '|   |'.split(''),
      '|   |'.split(''),
      '+---+'.split(''),
    ]);

    expect(rect.clone().CLASSNAME).toBe('Rect');
    rect.toString();
  });
};
