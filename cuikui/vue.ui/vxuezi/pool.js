//加载mysql模块
const mysql=require("mysql");
//创建连接池对象
var pool=mysql.createPool({
    host:"127.0.0.1",//连接mysql数据库地址
    user:"root",     //连接mysql用户名
    password:"",
    database:"web1806",
    port:3306,         //端口号默认
    connectionLimit:10 //连接池10 活动连接

});
//导出连接池对象
module.exports=pool;