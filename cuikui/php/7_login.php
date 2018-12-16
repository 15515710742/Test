<?php
//变量必须先声明再使用
//echo json_encode($_ABC);//运行时错误
//echo json_encode($_REQUEST);

//结论:$_REQUEST是一个php解释器预先创建的关联数组,其中保存着客户端请求消息中提交的请求的数据(包括查询字符串和)
//
$n = $_REQUEST['uname'];
echo "用户名: $n <br>";

$p = $_REQUEST['upwd'];
echo "密码: $p <br>";


?>