/**
 * Created by hustcc.
 * Contract: i@hust.cc
 */

module.exports = (StringUtils, NumberUtils) => {
  test('1. toString.', () => {
    expect(StringUtils.toString(null)).toBe('null');
    expect(StringUtils.toString(undefined)).toBe('undefined');
    expect(StringUtils.toString(false)).toBe('false');
    expect(StringUtils.toString('')).toBe('');
    expect(StringUtils.toString(123)).toBe('123');
    expect(StringUtils.toString('hustcc')).toBe('hustcc');

    expect(StringUtils.toString([1, '2'])).toBe('[1,"2"]');
    expect(StringUtils.toString({a: 1, b: '2'})).toBe('{"a":1,"b":"2"}');
    expect(typeof StringUtils.toString(new Date())).toBe('string');
  });

  test('2. toPercent.', () => {
    expect(NumberUtils.toPercent(123)).toBe('12300%');
    expect(NumberUtils.toPercent(0.234, 0)).toBe('23%');
  });
};
