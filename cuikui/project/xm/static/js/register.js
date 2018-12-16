
var isRegister=false;//全局变量,控制注册按钮
function checkUname(){
  var xhr = createXhr();
  xhr.onreadystatechange=function(){
    if(xhr.readyState==4 && xhr.status==200){
      var res=xhr.responseText;
      if(res=="1"){
        $("showUname").innerHTML=`<img src="img/register/err.png" class="pb-1">&nbsp;用户名已被占用`;
        $("show").innerHTML="";
        $("uname").value="";
        isRegister=false;
      }else{
        $("show").innerHTML=`<img src="img/register/ok.png" class="pb-1">&nbsp;用户名可以使用`;
        $("showUname").innerHTML="";
        isRegister=true;
      }
    }
  }
  var uname=$("uname").value;
  xhr.open("get","/user/checkUname?uname="+uname,true);
  xhr.send(null);
}
//用户名可用,方可异步请求注册
function register(){
  if(isRegister=true){
    var xhr=createXhr();
    xhr.onreadystatechange=function(){
      if(xhr.readyState==4 && xhr.status==200){
        var res=xhr.responseText;
        alert(res);
      }
    }
    xhr.open("post","/user/register",true);
    xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
    var uname=$("uname").value;
    var upwd=$("upwd").value;
    var email=$("email").value;
    var phone=$("phone").value;
    var user_name=$("user_name").value;
    var gender=$("gender").value;
    var formdata="uname="+uname+"&upwd="+upwd+"&email="+email+"&phone="+phone+"&user_name="+user_name+"&gender="+gender;
    xhr.send(formdata);
  }else{
    alert("请检查注册信息");
  }
}