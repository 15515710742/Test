//引入所需要的express包
const express=require("express");
//引入连接池模块
const pool=require("../pool.js");
//使用express创建路由 
const router=express.Router();

//创建路由
//获取主页中的内容
router.get("/",(req,res)=>{
	var obj={data1:[],data2:[],data3:[],data4:[]};
	(async function(){
		await new Promise(function(open){
			var sql=`SELECT * FROM xm_index_travel`;
			pool.query(sql,(err,result)=>{
				if(err) throw err;
				obj.data1 = result;
				open();
			});	
		})
		await new Promise(function(open){
			var sql=`SELECT * FROM xm_index_inland`;
			pool.query(sql,(err,result)=>{
				if(err) throw err;
				obj.data2 = result;
				open();
			});
		});
		await new Promise(function(open){
			var sql=`SELECT * FROM xm_index_destination`;
			pool.query(sql,(err,result)=>{
				if(err) throw err;
				obj.data3 = result;
				open();
			});
		});
		await new Promise(function(open){
			var sql=`SELECT * FROM xm_index_tourist`;
			pool.query(sql,(err,result)=>{
				if(err) throw err;
				obj.data4 = result;
				open();
			});
		});
		res.send(obj);
	})();
});

//导出路由
module.exports=router;



