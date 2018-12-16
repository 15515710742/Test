<?php
//修改响应消息头部
header('Content-Type:application/json');

//完成新用户添加功能点
//1.接受客户端提交的请求数据
//echo json_encode($_REQUEST);
$n = $_REQUEST['uname'];
$p = $_REQUEST['upwd'];
$m = $_REQUEST['email'];
$h = $_REQUEST['phone'];
//2.连接到数据库服务器
$conn = mysqli_connect('127.0.0.1','root','','xz','3306');

//3.向数据库提交sql语句
$sql = "INSRET INTO xz_user VALUES(NULL,'$n','$p','$m','$h',NULL,NULL,NULL)";
$result = mysqli_query($conn,$sql);//向数据库提交查询语句

//4.查看sql语句执行结果
if($result===false){//sql语句执行失败
	$arr = ['code'=>400,'msg'=>'user add err','err'=>$sql];
}else{				//sql语句执行错误
	$arr = ['code'=>200,'msg'=>'success'];
}
echo json_encode($arr);


?>