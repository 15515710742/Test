//同步(阻塞模式)和异步(非阻塞模式)
console.log(1);
/*
setTimeout(()=>{
  console.log(2);
},1000);
*/

setImmediate(()=>{
  console.log(2);
});

console.log(3);













