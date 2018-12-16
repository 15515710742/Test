//1.查找触发事件的元素
//2.绑定事件处理函数
//3.查找要修改的元素
//4.修改元素
 


//1.查找触发事件的元素
var txtName=document.getElementsByName("username")[0];
var txtPwd=document.getElementsByName("pwd")[0];
//2.绑定事件处理函数
txtName.onfocus=txtPwd.onfocus=function(){
    //给this传txt_foucs
    this.className="txt_focus";
    //给旁边的div脱vali_info
    this.parentNode.nextElementSibling.children[0].className="";
}
txtName.onblur=function(){
    vali(this,/^\w{1,10}$/);
}
function vali(txt,reg){
    txt.className="";//给自己脱txt_foucs
    var pass=reg.test(txt.value);//验证自己的内容
    var div=txt.parentNode.nextElementSibling.children[0];//查找旁边的div
    if(pass)//如果验证通过
        //给旁边的div穿上vali_success
        div.className="vali_success";
    else//否则
        div.className="vali_fail";//给旁边的div穿上vali_fail
}
txtPwd.onblur=function(){
    vali(this,/^\d{6}$/);
}



