//练习
const fs = require('fs');
//1.判断是否存在num.txt
var filename = './num.txt';
fs.stat(filename,(err,stat)=>{
 //如果不存在   
  if(err){
    fs.writeFile(filename,0,(err)=>{		
	});
  }
});
//2.读取num.txt，把读取的内容+1
fs.readFile(filename,(err,data)=>{
 //将读取的结果,执行+1
  var n =data.toString();
  n++;
  console.log(n);
//3.把加1的结果，写入到num.txt中
  fs.writeFile(filename,n,(err)=>{
  });
});






