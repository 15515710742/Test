(async function(){
    var res=await ajax({
        url:"http://127.0.0.1:3000/index/",
        type:"get",
        dataType:"json"
    });
//第一层境外景区
    var parent=document.querySelector("#demo1>div:nth-child(2)"); 
    var html=``;
    for(var travel of res.data1){
        var {details,src,title,price,href}=travel;
        html+=`<div class="col-3 border pt-3 pb-3">
        <a href="#" title="${details}">
            <img src="${src}" class="my_img img-shadow"/>
        </a>
        <p class="mb-2 mt-2"><a href="#" class="text-dark">${title}</a></p>
        <div class="d-flex justify-content-between">
            <div>
                <span class="font-weight-bold my_color">¥${price.toFixed(2)}</span><span>起</span>
            </div>
            <a href="${href}" class="d-inline-block text-white my_color my_size pl-1">立即预定</a>
        </div>
        </div>`;
    }
    parent.innerHTML=html;
//第二层品牌推荐
    var parent=document.querySelector("#demo2 div.son>div:nth-child(2)");
    var html=``;
    for(var product of res.data2){
        var {title,href,src}=product;
        html+=`<div class="second">
                <a href="#" title="${title}"><img src="${src}" class="my_img1 img-shadow1"/></a>
                <p class="pl-3 mb-2 mt-2">
                    <a href="${href}" class="text-dark"><i class="glyphicon glyphicon-map-marker"></i>${title}</a>
                </p>
            </div>`;
    }
    parent.innerHTML=html;
    //第二层目的地
    var parent=document.querySelector("#demo2 div.son>div:nth-child(1)");
    var html=``;
    for(var product of res.data3){
        var {title,href,src}=product;
        html+=`<div class="second">
                <a href="#" title="${title}"><img src="${src}" class="my_img2 img4"/></a>
                <p class="pl-3 mb-2 mt-2">
                    <a href="${href}" class="text-dark"><i class="glyphicon glyphicon-map-marker"></i>${title}</a>
                </p>
            </div>`;
    }
    parent.innerHTML=html;
    //第二层热门景点
    var parent=document.querySelector("#demo2 div.son>div:nth-child(3)");
    var html=``;
    for(var product of res.data4){
        var {txt,title,href,src}=product;
        html+=`<div class="second move">
                <a href="#" title="${txt}"><img src="${src}" class="my_img3"/></a>
                <p class="pl-3 mb-0 mt-0">
                    <a href="${href}" class="text-white">${title}</a>
                </p>
            </div>`;
    }
    parent.innerHTML=html;
})();





