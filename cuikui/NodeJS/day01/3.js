//console对象
console.log(123);//日志
console.info('hello');//消息
console.warn(456);//警告
console.error(789);//错误

//检测程序的执行时间
console.time('FOR-LOOP');//开始
for(var i=0;i<100;i++){
}
console.timeEnd('FOR-LOOP');//结束
//检测while循环和for循环和do-while，哪个执行的更快
console.time('FOR');
var i=0;
while(i<10000){
  i++;
}
console.timeEnd('FOR');


console.time('FOR');
for(var i=0;i<10000;i++){
}
console.timeEnd('FOR');


console.time('FOR');
var i=0;
do{
  i++;
}while(i<10000)
console.timeEnd('FOR');



