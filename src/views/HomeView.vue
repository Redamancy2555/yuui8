<template>
  <div>
    <router-view />
<van-tabbar route>
  <van-tabbar-item replace to="/about" icon="home-o">首页</van-tabbar-item>
  <van-tabbar-item replace to="/detail" icon="search">分类</van-tabbar-item>
  <van-tabbar-item replace to="/shopcar" icon="search">购物车</van-tabbar-item>
  <van-tabbar-item replace to="/my" icon="search">我的</van-tabbar-item>
</van-tabbar>
  </div>
</template>

<script lang="ts" setup>

</script>

<style lang="scss" scoped>

</style>