/**
 * $("#button").click(function(){
 *    alert("clicked");
 * });
 */
//加载核心包，样板间
var http=require("http");
//开一家自己的分店
/*var writer=function(req,res){//q=0.9 权重 接受的格式好多种如果好几种资源都有 那我会返回给你权重比较高的一种
 console.log(req.url);
 setTimeout(function(){
 res.write("can i help sit?");
 },1000);
 setTimeout(function(){
 res.write("what do you want");
 },1000);
 setTimeout(function(){
 res.end("");
 },1000);
 };*/
var writer=function(req,res){
    console.log(req.url);
    console.log(req.headers["accept-language"]);
    console.log(req.headers["accept-encoding"]);
    var url=req.url;
    var path=url.split("?")[0];
    var query=url.split("?")[1];
    //utf-8
    res.writeHead(200,{"Content-Type":"text/html;charset=utf-8"});
    /*res.end("包子");*/
    if(path=="/baozi"){
        res.end(query.split("=")[1]+"个包子");
    }else if(path=="/doufu"){
        res.end(query.split("=")[1]+"块豆腐");
    }else{
        res.end("我们没有这道菜");
    }
};
var server=http.createServer(writer);
//开业啦
server.listen(8080);
/**
* 1xx 请求已经受理，需要继续处理
* 2xx 服务器已经接受，正常响应
* 3xx 重定向 需要客户端进一步
* 4xx 客户端错误
* 5xx 服务器端错误
* */