<template>
    <div>
        <van-nav-bar
  title="标题"
  left-text="返回"
  left-arrow
  @click-left="onClickLeft"
/>
<van-form @submit="onSubmit">
  <van-cell-group inset>
    <van-field
      v-model="obj.loginName"
      name="用户名"
      label="用户名"
      placeholder="用户名"
      :rules="[{ required: true, message: '请填写用户名' }]"
    />
    <van-field
      v-model="obj.password"
      type="password"
      name="密码"
      label="密码"
      placeholder="密码"
      :rules="[{ required: true, message: '请填写密码' }]"
    />
  </van-cell-group>
  <div style="margin: 16px;">
    <p style="color: #3d92e3;" @click="zuce" v-if="index==0">立即注册</p>
    <p style="color: #3d92e3;" v-else>已有登录账号</p>
    <van-button round block type="primary" native-type="submit">
      提交
    </van-button>
  </div>
</van-form>
    </div>
  </template>
  
  <script lang="ts" setup>
  import { reactive,ref } from 'vue';
// import { ref } from 'vue';
import {derafe} from '../api/api'
const obj=reactive({
    loginName:'',
    password:''
})
const index=ref(0)
import { useRouter } from 'vue-router'
const router = useRouter()
const zuce=()=>{
    if(localStorage.getItem('token')){
        index.value=1
    }else{
        derafe(obj).then((res:any)=>{
            localStorage.setItem('token',obj.loginName)
      console.log(res);
    })
    }
}
const onSubmit = (values:any) => {
   router.push('/about')
    };
    const onClickLeft=()=>{
      console.log('返回');
    }
  </script>
  
  <style lang="scss" scoped>
  
  </style>