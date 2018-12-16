//弹出提示窗口
var year = prompt('please input year');
//判断年份是否为闰年
var res = year%4 == 0 && year%100 != 0 || year%400 == 0;

alert(res);








