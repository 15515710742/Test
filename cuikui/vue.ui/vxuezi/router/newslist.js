const express=require("express");
const pool=require("../pool.js");
const router=express.Router();

router.get("/list",(req,res)=>{
    var pno=req.query.pno;
    var pageSize=req.query.pageSize;
    //设置参数默认值
    if(!pno){
        pno=1;
    }
    if(!pageSize){
        pageSize=10;
    }
    //验证用户输入
    var reg=/^[0-9]{1,}$/;
    if(!reg.test(pno)){
        res.send({code:-1,msg:"页码格式不正确"});
        return; 
    }
    if(!reg.test(pageSize)){
        res.send({code:-2,msg:"页码大小格式不正确"})
        return;
    }
    //创建总记录数
    //1创建空对象保存返回数据
    var obj={pno:pno,pageSize:pageSize};
    //2.创建变量保存(sql语句完成)进度
    var progress = 0;
    var sql="SELECT count(id) as c FROM xz_news";
    pool.query(sql,(err,result)=>{
        if(err) throw error;
        var pageCount=Math.ceil(result[0].c/pageSize);
        obj.pageCount = pageCount;      //保存总页数
        progress+=50;                   //记录当前进度
        if(progress==100){              //二条SQL语句完成
            res.send({code:1,msg:obj})  //发送结果
        }
    });
    var offset=parseInt((pno-1)*pageSize);
    var pageSize=parseInt(pageSize);
    var sql="SELECT id,title,ctime FROM xz_news LIMIT ?,?";
    pool.query(sql,[offset,pageSize],(err,result)=>{
        if(err) throw error;
        obj.data = result;              //保存当前页内容
        progress +=50;                  //进度+50
        if(progress==100){              //二条sql语句完成
            res.send({code:1,msg:obj})  //发送结果
        }
    });
});
//功能二:依据用户的id查找新闻的详细信息
router.get("/find",(req,res)=>{
	//参数id
	var id=req.query.id;
	//sql
	var sql = "SELECT `id`,`title`, `content`, `click`, `img_url`, `price`, `ctime` FROM `xz_news` Where id=?";
	//json
	pool.query(sql,[id],(err,result)=>{
		if(err) throw err;
		res.send({code:1,msg:result});
	});
});

router.get("/commentlist",(req,res)=>{
    //参数 pno pageSize nid
    var pno=req.query.pno;
    var pageSize=req.query.pageSize;
    var nid=parseInt(req.query.nid);
    if(!pno){pno=1}           
    if(!pageSize){pageSize=5} 
    //总记录数
    var  obj = {pno:pno,pageSize:pageSize}
    var progress = 0;       
    var sql ="SELECT count(id) as c FROM xz_comment WHERE nid=?";
    pool.query(sql,[nid],(err,result)=>{
        if(err) throw err;
        obj.pageCount=Math.ceil(result[0].c/pageSize);
        progress +=50;
        if(progress==100)
        res.send(obj)
    })
    //当前页内容
    var offset=parseInt((pno-1)*pageSize);
    var pageSize=parseInt(pageSize);
    var sql="SELECT `id`,`nid`, `ctime`, `content`, `username`, `isdel` FROM `xz_comment` WHERE nid=?";
		sql+=" ORDER BY id DESC LIMIT ?,? ";
    pool.query(sql,[nid,offset,pageSize],(err,result)=>{
        if(err) throw err;
        obj.data = result;
        progress += 50;
        if(progress==100){
            res.send(obj)
        }        
    })
});
//功能四:添加一条评论
//获取 查询 需要数据 SELECT
//添加 保存 插入数据 INSERT
//更新 修改          UPDATE
router.post("/saveComment",(req,res)=>{
	//参数 nid  ctime username content
	var {nid,username,content} = req.body;
	//content 长度大于2
	if(content.length < 2){
		res.send({code:-1,msg:"亲!评论内容太少了"});
		return;
	}
	//sql语句
	//返回数据
	var sql="INSERT INTO `xz_comment`(`id`, `nid`, `ctime`, `content`, `username`, `isdel`) VALUES (null,?,now(),?,?,0)";
		
	pool.query(sql,[nid,content,username],(err,result)=>{
		if(err) throw err;
		//UPDATE;INSERT;DELETE
		//执行成功条:件影响的行数
		if(result.affectedRows == 1){
			res.send({code:1,msg:"添加成功"})
		}else{
			res.send({code:-1,msg:"添加失败"})	
		}
	});
});

//导出路由对象
module.exports=router;


