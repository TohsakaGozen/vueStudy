<template>
  <div class="Category">
    <h3>{{ title }}分类</h3>
    <ul v-show="false">
      <li v-for="(item, index) in listData" :key="index">{{ item }}</li>
    </ul>
    <!-- 定义一个插槽 -->
    <slot name="center">我是一个默认值1，当使用者没有传值时显示</slot>
    <br />
    <slot name="footer">我是一个默认值2，当使用者没有传值时显示</slot>
  </div>
</template>

<script>
export default {
  name: "Category",
  props: ["listData", "title"],
};
</script>

<style scoped>
.Category {
  background-color: aquamarine;
  width: 200px;
  height: 300px;
}

h3 {
  text-align: center;
  background-color: aqua;
}
</style>