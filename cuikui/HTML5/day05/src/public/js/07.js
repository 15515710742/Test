//执行一段js代码超过3秒
var start = new Date().getTime();   
do{
    var end = new Date().getTime();
}while(end-start<3000);
// var v = end-start; 
// var msg = document.getElementById("msg");
onmessage = function(e){
    console.log(e.data)
    postMessage("宝塔镇河妖")
}