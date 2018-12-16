//引入express模块
const express=require("express");
const bodyParse=require("body-parser");
const routerImageList=require("./router/imagelist.js");
const routerNewsList=require("./router/newslist.js");
const routerGoodsList=require("./router/goodslist.js");
const routerCartList= require("./router/cartlist.js")
//创建express
var app=express();
//加载处理跨域模块
const cors=require("cors");
//允许哪个地址跨域模块
app.use(cors({
    origin:["http://127.0.0.1:3001","http://localhost:3001","http://127.0.0.1:4200"],
    credentials:true
}))
//绑定监听端口3000
var server=app.listen(3000);
//配置第三方中间件
app.use(bodyParse.urlencoded({extended:false}));
//指定静态目录public
//__dirname当前程序所有目录完整路径
app.use(express.static("public"));

app.use("/imagelist",routerImageList);
app.use("/newslist",routerNewsList);
app.use("/goodslist",routerGoodsList);
app.use("/cartlist",routerCartList);





