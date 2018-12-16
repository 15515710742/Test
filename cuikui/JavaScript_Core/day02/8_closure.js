//闭包的讲解
//定义外层函数包裹变量和内层函数
function outer(){
    var i=1;//要保护的变量
    //2.外层函数返回内层函数到外部
    return function(){//使用i的内部函数
      console.log(i++);//先输出i,再i+=1
    }
}
//3.使用者调用外层函数,获取内层函数对象,保存在变量中反复使用
var getNum=outer();
getNum();//1
getNum();//2
getNum();//3
getNum();//4







