//函数的作用域
function fn(){
  console.log('global');  
}
//outer是全局函数
function outer(){  
  console.log('this is outer'); 
  function inner(){
    console.log('this is inner');    
  }
  inner();
}
outer(); 
fn();












