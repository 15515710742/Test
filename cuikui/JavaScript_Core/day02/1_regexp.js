//var msg="床前明月光,一行白鹭上青天";
var kws=["明月","青天","紫烟"];

var reg=new RegExp(kws.join("|"));
var msg="明月几时有,把酒问青天";
if(msg.search(reg)!=-1){
    console.log("发现敏感词,关小黑屋!");
}else{
    console.log("成亮说:"+msg);
}