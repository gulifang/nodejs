var number=2;
var obj={
    number:4,
    fn1:(function(){
        this.number*=2;//globe node里边 window跟globe不是一回事
        number=number*2;
        var number=3;
        return function(){
            this.number*=2;
            number*=3;
            console.log(number);//9
        }
    })()
};
var fn1=obj.fn1;
console.log(number);//2
fn1();// number window  8  var number27
obj.fn1();
console.log(number);//2
console.log(obj.number);//8