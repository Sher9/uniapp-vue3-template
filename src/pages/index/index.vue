<template>
  <view class="content">
  222
    <up-search placeholder="日照香炉生紫烟" v-model="keyword"></up-search>
  </view>
</template>

<script setup>
// 响应式数据
const keyword = ref("遥看瀑布挂前川");
</script>

<style>
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.logo {
  height: 200rpx;
  width: 200rpx;
  margin-top: 200rpx;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 50rpx;
}

.text-area {
  display: flex;
  justify-content: center;
}

.title {
  font-size: 36rpx;
  color: #8f8f94;
}
</style>
