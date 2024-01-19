<template>
  <div>
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
  <van-swipe-item v-for="item in banner">
    <img :src="item.carouselUrl" alt="" style="width: 100%;height: 260px;">
  </van-swipe-item>
</van-swipe>
<p style="text-align: center;color: #2397a8;">新品上线</p>
<div class="box">
  <div class="shop" v-for="item in list">
    <img :src="item.goodsCoverImg" alt="" style="width: 180px;height: 200px;">
    <p>{{ item.goodsName }}</p>
    <p style="color: #2397a8;">{{ item.sellingPrice }}</p>
  </div>
</div>
<p style="text-align: center;color: #2397a8;">热门商品</p>
<div class="box">
  <div class="shop" v-for="item in list1">
    <img :src="item.goodsCoverImg" alt="" style="width: 180px;height: 200px;">
    <p>{{ item.goodsName }}</p>
    <p style="color: #2397a8;">{{ item.sellingPrice }}</p>
  </div>
</div>
<p style="text-align: center;color: #2397a8;">最新推荐</p>
<div class="box">
  <div class="shop" v-for="item in list2">
    <img :src="item.goodsCoverImg" alt="" style="width: 180px;height: 200px;">
    <p>{{ item.goodsName }}</p>
    <p style="color: #2397a8;">{{ item.sellingPrice }}</p>
  </div>
</div>
  </div>
</template>

<script lang="ts" setup>
import {bannerApi} from '../api/api'
import {ref} from 'vue'
const banner=ref([])
const list=ref([])
const list1=ref([])
const list2=ref([])
const get=()=>{
  bannerApi().then((res:any)=>{
    console.log(res);
    banner.value=res.data.data.carousels
    list.value=res.data.data.hotGoodses
    list1.value=res.data.data.newGoodses
    list2.value=res.data.data.recommendGoodses
  })
}
get()
</script>

<style lang="scss" scoped>
.box{
  display: flex;
  flex-wrap: wrap;
.shop{
  width: 50%;
  height: 300px;
  text-align: center;
}
}
</style>