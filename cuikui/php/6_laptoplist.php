<?php

/*
创建一个数组,保存一个笔记本的所有信息;
创建一个数组,保存一个笔记本的所有信息;
创建一个数组,保存一个笔记本的所有信息;
创建一个数组,保存上述三个笔记本的信息;
把笔记本列表数转换为json字符串并输出;
二维数组,本质上就是关系型数据库中的表
*/
$laptop1 = ['lid'=>100,'title'=>'小米','price'=>7500.66,'isOnline'=>true];
$laptop2 = ['lid'=>100,'title'=>'小米','price'=>7500.66,'isOnline'=>true];
$laptop3 = ['lid'=>102,'title'=>'华硕','price'=>7500.66,'isOnline'=>true];
$laptopList = [$laptop1,$laptop2,$laptop3];

echo json_encode($laptopList);


?>