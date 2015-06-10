for(var i=0;i<5;i++) {
    setTimeout(function () {
        console.log(i);
    },1000);
}
for(var j=0;j<5;j++){
    (function(j){
        setTimeout(function(){
            console.log(j);
        },2000);
    })(j);
}