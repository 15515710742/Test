
onmessage = function(e){
    //1.接收ui传递用户数值
    var num = parseInt(e.data);
    //2.累加计算
    var sum = 0;
    for(var i=1;i<=num;i++){
        sum+=i;
    }
    //3.发送回去
    postMessage(sum);
}