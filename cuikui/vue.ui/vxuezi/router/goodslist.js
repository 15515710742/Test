const express=require("express");
const pool=require("../pool.js");
const router=express.Router();

router.get("/list",(req,res)=>{
    var obj=[{id:1,img_url:"http://127.0.0.1:3000/img/banner1.png",title:"魅族M9",p_old:"3000.00",p_now:"2199.99",sell:1},
             {id:2,img_url:"http://127.0.0.1:3000/img/banner2.png",title:"360 N7",p_old:"3000.00",p_now:"2199.99",sell:1},
             {id:3,img_url:"http://127.0.0.1:3000/img/banner3.png",title:"魅族M9",p_old:"3000.00",p_now:"2199.99",sell:1},
             {id:4,img_url:"http://127.0.0.1:3000/img/banner4.png",title:"360 N7",p_old:"3000.00",p_now:"2199.99",sell:1}       
    ];
    res.send({code:1,msg:obj})
});
//功能二:依据商品的编号查询商品的信息
router.get("/find",(req,res)=>{
    var obj = {id:"9",title:"小辣椒",p_old:2199.99,p_now:2099.99,p_sn:"20180930",p_type:"青春款"}
    res.send(obj);
});
//导出路由对象
module.exports=router;


