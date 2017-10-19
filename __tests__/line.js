/**
 * Created by hustcc.
 * Contract: i@hust.cc
 */


module.exports = (Point, Line) => {
  test('1. draw a line element.', () => {
    let start = new Point(0, 0);
    let end = new Point(0, 50);
    const line = new Line(start, end);
    let lineLayer = line.draw();

    expect(lineLayer.box).toEqual({
      x1: 0,
      y1: 0,
      x2: 0,
      y2: 50,
    });
    expect(lineLayer.array()).toEqual(new Array(51).fill(new Array(1).fill('|')));

    start = new Point(0, 0);
    end = new Point(50, 0);
    lineLayer = new Line(start, end).draw();

    expect(lineLayer.box).toEqual({
      x1: 0,
      y1: 0,
      x2: 50,
      y2: 0,
    });
    expect(lineLayer.array()).toEqual(new Array(1).fill(new Array(51).fill('-')));

    expect(line.clone().CLASSNAME).toBe('Line');
    expect(line.toString()).toBe('Line(Point(0, 0), Point(0, 50))');
  });
};
