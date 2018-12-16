var str="helloworld";
var arr=[];//定义关联数组
for(var i=0;i<str.length;i++){//遍历字符串
    var key=str[i];//将当前字母看做key
    //如果arr中没有下标为key的元素
    if(arr[key]===undefined){
        //为arr中添加下标为key的元素,初始值为1
        arr[key]=1;
    }else{
        arr[key]++;//为arr中下标为key的元素值+1
    }
}
console.log(arr);
var c,n;
for(var key in arr){//遍历字典中的每一项
    //首次比较直接将第一个字母几个数保存为最多字母和个数
    if(c===undefined){
        c=key;//字母
        n=arr[key];//个数
    }else{
        //然后,再让之后的每个字母的个数于现在暂时最多的个数比
        if(arr[key]>n){//只有当前字母的个数>以保存字母的个数
            c=key;//取而代之
            n=arr[key];
        }
    }
}
console.log(`出现次数最多的是:${c},共${n}次`);