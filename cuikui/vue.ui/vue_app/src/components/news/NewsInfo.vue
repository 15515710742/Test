<template>
   <div>
         <comment-box :id="this.id"></comment-box>
   </div>
</template>
<script>
  import comment from "../subcomponents/comment.vue"
   export default{
          data(){
              return {
                  id:this.$route.query.id,
              }
          },
          created(){
              this.getnewsinfo();
          },
          methods:{
              getnewsinfo(){
                  console.log(this.id)
              }
          },
          
      components:{
          //用来注册子组件
          "comment-box":comment
      }

   }
</script>