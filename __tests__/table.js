/**
 * Created by hustcc.
 * Contract: i@hust.cc
 */


module.exports = (Table) => {
  test('1. draw a table chart.', () => {
    const table = new Table();
    table.setData([
      ['id', 'name', 'birthday'],
      ['#1', 'xiaowei', '1992-08-01 '],
      ['#2', 'hello', '1992-09-20 '],
      ['#3', 'tcharts', '2017-06-27  '],
      ['#4', 'world'],
    ]);
    console.log(table.string());
    const r = `
+----+----------+----------------+
| id |   name   |    birthday    |
+----+----------+----------------+
| #1 |  xiaowei |   1992-08-01   |
+----+----------+----------------+
| #2 |  hello   |   1992-09-20   |
+----+----------+----------------+
| #3 | tcharts  |   2017-06-27   |
+----+----------+----------------+
| #4 |     d    |                |
+----+----------+----------------+`.trim();
    expect(table.string()).toBe(r);
  });
};
