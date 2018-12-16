
var http=require("http");
http.createServer(function(req,res){
    res.writeHead(200,{"Content-Type":"text/plain;charset=utf-8","Access-Control-Allow-Origin":"*"});
    var weather="多云18~26 from 崔奎";
    res.write(weather);
    res.end();
}).listen(8000);
