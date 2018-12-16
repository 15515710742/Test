//fs模块
//查看文件的状态
//引入fs模块--->文件系统模块
const fs =require('fs');
//同步函数
//异步函数
//查看当前目录下1.txt文件状态
/*
fs.stat('./1.txt',(err,stat)=>{
//err错误对象
//console.log(stat);
//查看是否为目录
  console.log(stat.isDirectory());
  console.log(stat.isFile());
});
*/
//同步查看文件状态
/*
var res = fs.statSync('./1.txt');
console.log(res);
*/
//创建目录
//fs.mkdir('./myDir',(err)=>{
//});
//删除目录
/*
fs.rmdir('./myDir',(err)=>{
//如果有错误，抛出错误
  if(err){
    throw err;
  }
//没有错误
  console.log('删除成功');
});
*/
//查看目录状态，如果不存在创建
/*
fs.stat('./myDir',(err,stat)=>{
  if(err){
    //创建目录
    fs.mkdir('./myDir',(err)=>{
	});
  }
});
*/
//读取目录
/*
fs.readdir('./1_2',(err,files)=>{
  console.log(files);
});
*/
//读取文件
/*
fs.readFile('./1.txt',(err,data)=>{
  if(err) throw err;  
//data读取的结果是buffer形式的数据
  console.log(data.toString());
});
*/
//写入文件/创建文件
//如果文件已经存在，先清空文件中的内容，然后写入
/*
fs.writeFile('./data.txt','你好',(err)=>{
//如果写入成功，打印消息
  if(!err){
    console.log('写入成功');
  }
});
*/
//追加写入文件/创建文件
/*
fs.appendFile('./data.txt','tom \n ',(err)=>{
  if(!err){
    console.log('追加写入成功');
  }
});
*/
//删除文件
fs.unlink('./num.txt',(err)=>{
  if(!err){
    console.log('删除成功');  
  }
});











