<template>
  <view class="content">
    <up-button
      type="primary"
      :plain="true"
      text="镂空"
      @tap="submit"
      class="button"
    ></up-button>
  </view>
</template>

<script setup>
const submit = () => {
  uni.reLaunch({ url: "/pages/tab/home/index" });
};
</script>

<style lang="scss">
.content {
  .button {
    margin-bottom: 30rpx;
  }
}
</style>
