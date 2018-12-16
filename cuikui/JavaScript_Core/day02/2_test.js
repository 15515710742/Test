var pwd="1234567";
var reg=/^\d{6}$/;//验证的时候必须加 (^ xxx $)
if(reg.test(pwd)){
    console.log("验证通过");
}else{
    console.log("密码格式不正确,请重试");
}