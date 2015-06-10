/**
 *
 */
var http=require("http");
http.createServer(function(req,res){
    res.write("欢迎光临");
    res.write("20分钟以后 欢迎再来");
    res.end("没啦")
}).listen(8080);
