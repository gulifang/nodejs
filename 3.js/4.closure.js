var i=9;
function fo(){
    i=0;
    return function(n){
        return n+i++;
    }
}
var f=fo();
var a=f(15);console.log(a);//15 i=1
var b=fo()(15);//15
var c=fo()(20);//15
var d=f(20);//21 这个时候呢 i=2