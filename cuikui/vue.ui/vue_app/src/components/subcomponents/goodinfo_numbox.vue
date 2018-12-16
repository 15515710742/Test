<template>
   <div>
     	<div class="mui-numbox" data-numbox-min='1'>
					<button class="mui-btn mui-btn-numbox-minus" type="button" @click="add1">-</button>
					<input id="test" class="mui-input-numbox" type="number" ref="numbox" v-model="num" @change="countChange" />
					<button class="mui-btn mui-btn-numbox-plus" type="button" @click="sub1">+</button>
				</div>
   </div>
</template>
<script>
//import mui from "../../lib/mui/js/mui.js";
export default{
    data(){
       return {num:1}
    },
    mounted(){
     //mui(".mui-numbox").numbox();
     console.log(this.max);
    },
    methods:{
      add1(){
          this.num--;
          if(this.num < 1){
             this.num = 1;
          }
          this.$emit("getcount",parseInt(this.$refx.number.value))
      },
      sub1(){
          this.num++;
      },
      countChange(){
          console.log(this.num);
      }
    },
    props:["max"],
    watch:{
        max:function(nv,ov){
            console.log(nv,ov);
            this.num = nv;
        }
    }
}
</script>
<style>
</style>