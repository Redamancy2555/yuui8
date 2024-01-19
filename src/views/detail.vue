<template>
    <div>
        <van-row>
  <van-col span="8">
    <van-sidebar v-model="active" @change="qh">
  <van-sidebar-item class="width" v-for="item in tab" :title="item.categoryName" />
</van-sidebar>
  </van-col>
  <van-col span="16">
<div v-for="ele,index in list" :key="index">
<div>{{ ele.categoryName }}</div>
<div v-for="(value, key) in ele.thirdLevelCategoryVOS" :key="key">{{ value.categoryName }}</div>
</div>
  </van-col>
</van-row>
    </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import {listApi}from '../api/api'
const active = ref(0);
const tab=ref([])
const list=ref([])
const qh=(index:any)=>{
    // active.value=index
    // console.log(index);
    list.value=tab.value[index].thirdLevelCategoryVOS
}
const get=()=>{
    listApi().then((res:any)=>{
        console.log(res);
        tab.value=res.data.data
        list.value=res.data.data[0].secondLevelCategoryVOS
    })
}
get()
</script>

<style lang="scss" scoped>
// .width{
//     width: 140px;
// }
</style>