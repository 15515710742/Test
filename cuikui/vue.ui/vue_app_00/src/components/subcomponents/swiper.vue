<template>
    <div class="app_subcom_swipt">
        <mt-swipe :auto="3000">
            <mt-swipe-item v-for="item in list" :key="item.id">
                <img :src="item.img_url">
            </mt-swipe-item>
        </mt-swipe>
    </div>
</template>
<script>
    export default {
        data(){return {} },                           
        methods:{},        
        props:["list"],//父元素传统数据        
    }
</script>
<style>
    .app_subcom_swipt .mint-swipe{
        height:150px;
    }
    .app_subcom_swipt .mint-swipe-item img{
        width:100%;
        height:100%;
    }
</style>