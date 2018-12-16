//1.加载模块 express;fs;multer
//2.创建express服务器
const express=require("express");
const fs = require("fs");
const multer = require("multer");
var app = express();
//3.指定托管静态目录
app.use(express.static(__dirname+"/public"));
app.listen(2000);
//4.接受上传的单个文件
var upload=multer({dest:"upload/"});
app.post("/uploads",upload.single("mypic"),(req,res)=>{
    var f=req.file;
    
    //如果文件超过2MB 不允许
    var size = f.size/1024/1024;
    if(size>2){
        res.send({code:-1,msg:"文件过大超过2MB"})
        return;
    }
    //如果文件不是图片不允许
    //image/gif /image/png image/jpg
    var type = f.mimetype;
    var i2 = type.indexOf("image");
    if(i2==-1){
        res.send({code:-2,msg:"上传文件只能是图片类型"})
        return;
    }
    //5.创建新文件名!!
    var src = f.originalname;
    //截取文件后缀名保存新的文件
    var i1=src.lastIndexOf(".");
    var suffix=src.substring(i1,src.length); 
    var newFileName="./upload/"+new Date().getTime();
    newFileName+=Math.floor(Math.random()*9999);
    newFileName+=suffix;
    // console.log(newFileName);
    //6.将临时文件移动upload目录
    fs.renameSync(f.path,newFileName);
    res.send({code:1,msg:"上传成功!!"})
});
//7.输出
