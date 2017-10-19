/**
 * Created by hustcc.
 * Contract: i@hust.cc
 */

module.exports = (Box) => {
  test('1. draw a box chart.', () => {
    let box = new Box(60, 20);
    box.setData([
      {value:100, name:'A'},
      {value:100, name:'B'},
      {value:100, name:'C'},
      {value:100, name:'Hello'},
    ]);
    const r = `
+--------------+----------------------+---------------------+
|              |                      |                     |
|              |                      |                     |
|              |                      |                     |
|              |                      |                     |
|              |                      |                     |
|              |                      |                     |
|              |        C:25%         |      Hello:25%      |
|              |                      |                     |
|              |                      |                     |
|    A:25%     |                      |                     |
|              |                      |                     |
|              |                      |                     |
|              +----------------------+---------------------+
|              |                                            |
|              |                                            |
|              |                                            |
|              |                   B:25%                    |
|              |                                            |
|              |                                            |
+--------------+--------------------------------------------+`.trim();
    expect(box.string()).toBe(r);

    box = new Box();
    box.setData([
      {value:100, name:'A'},
      {value:100, name:'B'},
      {value:100, name:'C'},
      {value:100, name:'Hello'},
    ]);
    console.log(box.string());
  });
};
