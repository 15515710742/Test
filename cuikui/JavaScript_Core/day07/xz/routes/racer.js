var express = require("express");
var router = express.Router();
router.get("/liang",(req,res)=>{
    setTimeout(function(){
        res.send("liang finished!")
    },5000);
});
router.get("/yaner",(req,res)=>{
    setTimeout(function(){
        res.send("yaner finished!")
    },7000);
});
router.get("/dong",(req,res)=>{
    setTimeout(function(){
        res.send("dong finished!")
    },3000);
});
module.exports=router;


