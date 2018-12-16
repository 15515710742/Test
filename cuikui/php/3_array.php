<?php
//创建一个数组,保存5个员工的月薪

$salaryList= [3000,5000,8000,2000,7000];

echo $salaryList;//输出数组,必然调用toString(),而此方法只有Object及其子类型才有!
echo $salaryList[0];
echo $salaryList[4];
//输出数组的长度  count():数数一个数组中元素的个数
echo count($salaryList);
//输出最后一个
echo $salaryList[count($salaryList)-1]



?>

