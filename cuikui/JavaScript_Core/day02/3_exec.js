var str="老师:请用小红,我的,朋友造句.小明:小红是我的朋友.小亮说:朋友,小红是我的!";
var reg=/小[\u4e00-\u9fa5]/g;
do{//先试着找一次
    var arr=reg.exec(str);//arr:[0:"关键词",index:i]
    if(arr!=null){//如果找到,就输出
        var i=arr.index;
        var kw=arr[0];
        console.log(`在位置${i},发现敏感词:${kw}`);
    }//否则,就退出循环
}while(arr!=null);