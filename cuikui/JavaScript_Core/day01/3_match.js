//假设:发送一条消息
var msg="我cao";
var arr=msg.match(/我\s*([艹操槽草]|cao)/i);
//如果msg中包含敏感词汇,就提示:包含敏感词,关小黑屋!
if(arr!=null)
  console.log(`在位置${arr["index"]}发现敏感词:${arr[0]},关小黑屋!`);
//否则才显示:成亮说:xxxx
  else
  console.log("成亮说:"+msg);







