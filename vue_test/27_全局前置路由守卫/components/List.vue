<template>
  <div class="itemBox">
    <!-- 指定组件的呈现位置 -->
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "List",
};
</script>

<style>
.itemBox {
  width: 400px;
  height: 400px;
  margin-top: 30px;
  border-radius: 5px;
  box-shadow: 0 0 5px slategrey;
}
</style>