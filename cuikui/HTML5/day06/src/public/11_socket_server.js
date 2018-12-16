//1.加载第三方模块
const ws = require("ws");
//2.创建ws服务器端对象
var server = new ws.Server({port:9001});
console.log("0:ws服务器开始监听端口");
//3.将服务器端对象绑定事件 connection 客户端连接
server.on("connection",(socket)=>{
//4.向客户端不停地发送消息
var counter = 0;
var timer = setInterval(()=>{
    counter ++;
    socket.send("I am Server - "+counter);
},1000)
    //5.接受客户端消息
    socket.on("message",(msg)=>{
        console.log("服务器收到客户端消息:"+msg);
    })
    //6.关闭客户端连接
    socket.on("close",()=>{
        clearInterval(timer);
    })
});