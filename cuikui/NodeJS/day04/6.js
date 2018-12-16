//MySQL模块
//引入MySQL模块
const mysql = require('mysql');
//1.连接mysql数据库(主机,端口,用户名,密码,要使用的数据库)
/*
var connection = mysql.createConnection({
  host:'127.0.0.1',  //localhost
  port:3306,
  user:'root',
  password:'',
  database:'tedu'
});
connection.connect();//连接
//执行sql语句
connection.query('SELECT * FROM emp',(err,result,fields)=>{
  if(err) throw err;
  console.log(result);
});
*/
//2.使用连接池
var pool = mysql.createPool({
  host:'127.0.0.1',
  user:'root',
  password:'',
  database:'tedu',
  connectionLimit:10//设置连接池中的连接数量
});
//执行sql语句
pool.query('SELECT * FROM dept',(err,result,fields)=>{
  if(err) throw err;
  console.log(result);
  //console.log(fields);
});
//使用query方法往部门表dept插入两条数据
/*
pool.query(`INSERT INTO dept VALUES(15,'市场部')`,(err,result)=>{
 // if(err) throw err;
  console.log(result);
});
pool.query('INSERT INTO dept VALUES(55,\'人事部\')',(err,result)=>{
 // if(err) throw err;
  console.log(result);

});
*/
/*
var deptObj={did:42, dname:'财务部'}
//?占位
pool.query(`INSERT INTO dept SET ? `,deptObj,(err,result)=>{
  if(err) throw err;
  console.log(result);
});
*/










