/*
function pay(){
  console.log("手机支付");  
}
function pay(money){
    console.log("现金支付");
}
function pay(card,pwd){
    console.log("刷卡支付");
}
pay();
pay(100);
pay(123,123456);
*/
function pay(){
    if(arguments.length==0){
        console.log("手机支付");
    }else if(arguments.length==1){
        console.log("现金支付");
    }else{
        console.log("刷卡支付");
    }
}
pay();
pay(100);
pay("6220 0123","123456");





