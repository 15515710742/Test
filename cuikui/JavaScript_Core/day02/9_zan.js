//闭包案例讲解
//匿名函数的自调用
var xihuan=(function(){
    var i=1;
    return function(){
        console.log("喜欢+"+i++)
    }
})();
xihuan();
var buxihuan=(function(){
    var i=1;
    return function (){
        console.log("不喜欢+"+i++)
    }
})();
buxihuan();










