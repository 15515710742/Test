<?php

//创建一个数组,保存6个学生的年龄,使用for循环输出每个年龄
$arr = [10,12,15,11,13,16];
//第一种:再添加一个新的元素
$arr[count($arr)]=20;
//第二种:再添加一个新的元素
$arr[]=21;
/*
for($i=0;$i<count($arr);$i++){
	echo $arr[$i].' ';
}
*/
//把数组数据转换为JSONS字符串输出  JSON.parse();
echo json_encode($arr)


?>	