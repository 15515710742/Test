//1.引入http模块:接受客户端发来的http请求并返回响应
var http=require("http");
var url=require("url");
//2.用http模块创建一个服务器程序示例
//回调函数:会在每次有客户端请求是发来时,自动触发
http.createServer(function(req,res){
    //req代表请求,res代表响应
    //res.writeHead()配置响应头
    res.writeHead(200,{"Content-Type":"text/plain;charset=utf-8"});
    //定义内容类型为,普通文本 且编码为
    //将字符串格式的url编译为对象形式的url
    req=url.parse(req.url,true);
    var fun=req.query.callback ;
    var weather="多云18~26 from 崔奎";
    //res.write(`document.write("${weather}")`);//向响应中写入内容
    res.write(`${fun}('${weather}')`);
    res.end();//结束并返回响应
}).listen(8000);//立刻启动8000端口监听

