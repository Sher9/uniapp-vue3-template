<template>
  <view class="content">
    <van-button type="danger" size="small">111</van-button>

    <van-field :value="value" placeholder="请输入用户名" @change="onChange" />
  </view>
</template>

<script setup>
import { useUserStore } from "@/pinia/user.js";
const user = useUserStore();

const userInfo = computed(() => user.userInfo);

console.log(userInfo);

const value = ref("");

const onChange = () => {};
const submit = () => {
  uni.reLaunch({ url: "/pages/tab/home/index" });
};
</script>

<style lang="scss">
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>
