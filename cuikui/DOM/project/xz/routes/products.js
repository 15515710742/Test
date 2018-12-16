const express=require("express");
const router=express.Router();
const pool = require("../pool.js")
//products
router.get("/",(req,res)=>{
    var kw=req.query.kw;
    var kws=kw.split(" ");
    kws.forEach((elem,i,kws)=>kws[i]=` title like '%${elem}%' `)
    var where = ` where ${kws.join(" and ")}`;
    var sql=`SELECT *,(select md from xz_laptop_pic where laptop_id=lid limit 1) as md FROM xz_laptop`;
    sql+=where;//查询全部,不分页
    //var pno=req.query.pno;
    //sql+=` limit ${pno*9},9`;//不在用sql的limit截取
    //sql+=limit;
    pool.query(sql,[],(err,result)=>{
        if(err) console.log(err);
        var data ={};// 新建结果对象
        data.pno=req.query.pno;//在结果对象中添加pno属性,
        //用查询结果的总数除以9,向上取整,获得总页数,放入结果data中
        data.pageCount=Math.ceil(result.length/9);
        //仅截取查询结果中的pno*9的9条记录,放入data中
        data.products=result.slice(data.pno*9,data.pno*9+9)
        res.send(data);
    })   
})
module.exports=router;

