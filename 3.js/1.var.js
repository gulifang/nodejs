/**
 * 在js中带var关键字的跟带function关键字的需要预解释
 * function 声明并赋值
 * var 声明不赋值
 */
console.log(num);//undefined
var num=9;
fn();//1
fn2();//报错  var fn2  fn2是undefined
function fn(){
    console.log(1);
};
var fn2=function(){
    console.log(2);
};
