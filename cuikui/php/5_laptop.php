<?php
$laptop1 = ['lid'=>100,'title'=>'小米','price'=>7500.66,'isOnline'=>true];
$laptop2 = [101,'联想',7500.66,true];
$laptop3 = ['lid'=>102,'title'=>'华硕','price'=>7500.66,'isOnline'=>true];

//把关联数组转换为json字符串输出
echo json_encode($laptop1);//转换为json对象
echo json_encode($laptop2);//转换为json数组


?>