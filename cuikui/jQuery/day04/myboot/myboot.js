/*****手风琴*****/ 
//事件绑定                        
$("[data-toggle=collapse]").parent().on("click","[data-toggle=collapse]",e=>
      $(e.target).next(".content").toggleClass("in")
        .siblings(".content").removeClass("in")
        
); 

/*********tabs**********/
jQuery.fn.tabs=function(){
  var $parent=this;
  $parent.children(":first-child").addClass("tabs")
          .children().children().attr("data-toggle","tab")
          .parent().first().addClass("active")
  $parent.children(":last-child").addClass("container").children(":first-child").addClass("active")         
//事件绑定
  $parent.children(":first-child").on("click","[data-toggle=tab]",e=>{
    e.preventDefault();
    var $tar=$(e.target);
    if(!$tar.parent().is(".active")){
      $tar.parent().addClass("active")
        .siblings().removeClass("active");
      var id=$tar.attr("data-target");
      $(id).addClass("active")
        .siblings().removeClass("active");
    }
  })
}













