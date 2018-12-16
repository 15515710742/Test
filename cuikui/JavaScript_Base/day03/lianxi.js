var input = '你好';
switch(input){
  case '取款':
    console.log('请输入取款金额...');
    break;
  case '存款':
	console.log('请放入存款金额...');
    break;
  case '转账':
    console.log('请放入转账金额...');
    break;
  case '查询':
	console.log('您的余额为100万');
    break;
  case '退出':
    console.log('请取出您的卡');
    break;
  default:
    console.log('输入错误');
}




