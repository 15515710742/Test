
<?php

//php&js:弱语言类型,有数据类型,但变量无需指定类型
$price = 3.5;
$count = 10;
//$total = $price*$count;


//echo 'Zongjia:' . $total;
//php中+只做算术运算,不做字符串拼接运算;可以用点(.)去拼接
//单引号和双引号有细微的差别.
//echo "danjia:$price shuliang:$count Zongjia: ".$total;
echo "danjia:$price shuliang:$count zongjia:".($price*$count);


?>
