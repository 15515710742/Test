//假设:发送一条消息
var msg="我操,你家真大!";
//如果msg中包含敏感词汇,就提示:包含敏感词,关小黑屋!
if(msg.search(/我\s*[艹操槽草]|cao/i)!=-1)
  console.log("包含敏感词汇,关小黑屋");
//否则才显示:成亮说:xxxx
  else
  console.log("成亮说:"+msg);
var msg="咱们wxin联系!";
if(msg.search(/(微|w(ei)?)\s*(信|x(in)?)/i)!=-1)
  console.log("包含敏感词,关小黑屋!");
else
  console.log("成亮说:"+msg);





