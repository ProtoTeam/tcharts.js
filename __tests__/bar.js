/**
 * Created by hustcc.
 * Contract: i@hust.cc
 */

module.exports = (Bar) => {
  test('1. draw a bar chart.', () => {
    let bar = new Bar(20);
    bar.setData([
      {value:100, name:'A'},
      {value:45, name:'B'},
      {value:70, name:'C'},
      {value:30, name:'D'},
    ]);
    const r = `
^                           
|  A:100                    
|  +--+                     
|  |  |                     
|  |  |        C:70         
|  |  |        +--+         
|  |  |  B:45  |  |         
|  |  |  +--+  |  |  D:30   
|  |  |  |  |  |  |  +--+   
|  |  |  |  |  |  |  |  |   
|  |  |  |  |  |  |  |  |   
+--+--+--+--+--+--+--+--+-->`.trim();
    expect(bar.string()).toBe(r);

    bar = new Bar(20, 0.1);
    bar.setData([
      {value:100, name:'A'},
      {value:45, name:'B'},
      {value:70, name:'C'},
      {value:30, name:'D'},
    ]);
    console.log(bar.string());

    bar = new Bar();
    bar.setData([
      {value:100, name:'A'},
      {value:45, name:'B'},
      {value:70, name:'C'},
      {value:30, name:'D'},
    ]);
    bar.array();
    console.log(bar.string());

  });
};
