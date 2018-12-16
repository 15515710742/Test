//定时器
//1.一次性定时器
/*
var timer = null;
//把开始的定时器放入timer中
timer = setTimeout(()=>{
  console.log('滴滴滴滴...');
},3000);
//清除定时器
clearTimeout(timer);
*/
//2.周期性定时器
/*
var timer = null;
timer = setInterval(()=>{
  console.log('didididi');
},3000);
clearInterval(timer);
//每隔2秒钟，打印出12345678910
var timer = null;
var i=0;
timer = setInterval(()=>{
  i++;
  console.log(i);
  if(i==10){
    clearInterval(timer);
  }
},2000);
//clearInterval(timer);
*/
//process.nextTick
process.nextTick(()=>{
console.log(123);
});
//4.setImmedite
var timer = null;
timer = setImmediate(()=>{
  console.log('hello');
});
clearImmediate(timer);



