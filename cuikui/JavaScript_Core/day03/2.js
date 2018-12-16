//鄙视:画简图 找两样东西
    //1.受保护的变量:n=999
    //2.外层函数向外抛出了几个内层函数
    function fun(){
        var n=999;
        nAdd=function(){n++}//自动在全局创建
        return function(){
             console.log(n);
        }
        return n;
    }
    var get=fun();
    get();//999
    nAdd();
    get();//1000

function fn(){
    for(var i=0,arr=[];i<3;i++){
        //一个函数如果不调用,是不会执行内容的
        arr[i]=function(){console.log(i);}             
    }
    return arr;
}
var funs=fn();
//受保护的变量:i=0   后被改为3
/*funs:[
    console.log(i);
    console.log(i);
    console.log(i);
]*/

funs[0]();//3
funs[1]();//3
funs[2]();//3













