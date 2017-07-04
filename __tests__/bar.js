/**
 * Created by hustcc.
 * Contract: i@hust.cc
 */

module.exports = (Bar) => {
  test('1. draw a bar chart.', () => {
    const bar = new Bar(60, 20);
    bar.setData([
      {value:100, name:'A'},
      {value:45, name:'B'},
      {value:70, name:'C'},
      {value:30, name:'D'},
    ]);
    console.log(bar.string());
    const r = `^                                                            
|     100                                                    
|      +------+                                              
|      |      |                                              
|      |      |                                              
|      |      |                                              
|      |      |                    70                        
|      |      |                    +------+                  
|      |      |                    |      |                  
|      |      |                    |      |                  
|      |      |                    |      |                  
|      |      |      45            |      |                  
|      |      |      +------+      |      |                  
|      |      |      |      |      |      |                  
|      |      |      |      |      |      |      30          
|      |      |      |      |      |      |      +------+    
|      |      |      |      |      |      |      |      |    
|      |      |      |      |      |      |      |      |    
|      |      |      |      |      |      |      |      |    
+------+------+------+------+------+------+------+------+--->
       A             B             C             D           `;
    expect(bar.string()).toBe(r);
  });
};
