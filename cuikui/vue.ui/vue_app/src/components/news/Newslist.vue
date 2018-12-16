<template>
   <div>
      <ul class="mui-table-view">
				<li class="mui-table-view-cell mui-media" v-for="item in list" :key="item.id">
					<router-link :to="'/home/newsinfo?id='+item.id">
						<img class="mui-media-object mui-pull-left" :src="item.img_url">
						<div class="mui-media-body">
							<h1>{{item.title}}</h1>
							<p class='mui-ellipsis'>
                             <span>{{item.add_time }}</span>
                               <span>点击:{{item.click}}次</span>
                            </p>
						</div>
					</router-link>
				</li>
			</ul>
   </div>
</template>
<script>
 export default{
   data(){
       return {
           list:[]
       }
   },
   created(){
      this.getnewslist();
   },
   methods:{
 getnewslist(){  //获取新闻列表
               this.$http.get("api/getnewslist.php").then(result=>{
                   if(result.body.status === 0){
                      this.list = result.body.message;
                   }else{
                       Toast("获取新闻列表失败");
                   }
               });
           }
   }

 }
</script>
<style>
  .mui-table-view li h1{
            font-size:14px
        }
      
   .mui-table-view li .mui-ellipsis{
            font-size:12px;
            color:#226aff;
            display:flex;
            justify-content:space-between;
        }
</style>