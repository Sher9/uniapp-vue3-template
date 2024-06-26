<template>
  <view>
    <up-tabbar
      :value="value1"
      @change="change1"
      :fixed="true"
      :placeholder="true"
      :safeAreaInsetBottom="true"
    >
      <up-tabbar-item text="首页" icon="home" @click="click1"></up-tabbar-item>
      <up-tabbar-item text="放映厅" icon="photo" @click="click1"></up-tabbar-item>
      <up-tabbar-item text="直播" icon="play-right" @click="click1"></up-tabbar-item>
      <up-tabbar-item text="我的" icon="account" @click="click1"></up-tabbar-item>
    </up-tabbar>
  </view>
</template>

<script setup>
const value1 = ref(1);
// 响应式数据
const click1 = (e) => {
  console.log(e);
};

const change1 = (e) => {
  console.log(e);
};
</script>
