var obj={name:"zfpx",age:"5"};
for(var key in obj){
    console.log(obj[key]);
}
//v8里边可以这么写
console.log(Object.keys(obj));
Object.prototype.email="zfpx@163.com";
for(var i in obj){
    if(obj.hasOwnProperty(i)){
        console.log(i);
    }
}
console.log(Array.isArray([]));//判断是不是一个数组
console.log(typeof []);
console.log(Object.prototype.toString.call([]));
[1,2,3].forEach(function(v){
    console.log(v);
});
var result=[1,2,3].filter(function(v){
    return v<2;
});
console.log(result);
var result1=[1,2,3].map(function(v){
    return v*2;  //[2,4,6]
});
console.log(result1);
console.log("  d  ".trim());//去首尾空格
Date.prototype.__defineGetter__("ago",function(){
    var differ=(new Date().getTime()-this.getTime());
    return "时间已经过去了"+differ/1000+"秒";
});
var a=new Date(new Date().getTime()-3600*1000);
console.log(a.ago);