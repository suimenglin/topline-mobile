<template>
    <div>
        <router-view />
        <van-tabbar route>
            <van-tabbar-item to="/home" icon="wap-home-o">首页</van-tabbar-item>
            <van-tabbar-item to="/answer" icon="chat-o">问答</van-tabbar-item>
            <van-tabbar-item to="/video" icon="video-o">视频</van-tabbar-item>
            <van-tabbar-item to="/mime" icon="contact">我的</van-tabbar-item>
        </van-tabbar>
    </div>
</template>

<script>
export default {

}
</script>

<style>

</style>
