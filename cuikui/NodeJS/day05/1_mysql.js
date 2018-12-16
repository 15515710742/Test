//MySQL操作sql语句
//1.连接MySQL数据库
const mysql = require('mysql');
var pool = mysql.createPool({
  host:'127.0.0.1',
  user:'root',
  password:'',
  database:'tedu',
  connectionLimit:10
});
//2.执行MySQL数据
//增删改查
//删除
/*
pool.query(`DELETE FROM dept WHERE did=?`,22,(err,result)=>{
  if(err) throw err;
  console.log(result);
});
*/
//修改数据
/*
pool.query(`UPDATE emp SET salary=?,birthday=? WHERE         eid=?`,[1000,'1980-3-1',1],(err,result)=>{
  if(err) throw err;
  console.log(result);
});
*/
//查询工资大于5000，并且性别为男的所有信息
pool.query(`SELECT * FROM emp WHERE sex=? AND salary>?`,[1,5000],(err,result)=>{
  if(err) throw err;
  console.log(result);
});




