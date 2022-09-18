<template>
  <div class="Category">
    <h3>{{ title }}分类</h3>
    <slot :anilmals="anilmals"></slot>
  </div>
</template>

<script>
export default {
  name: "Category",
  props: ["title"],
  data() {
    return {
      anilmals: ["街角魔族", "奥特曼", "假面骑士"],
    };
  },
};
</script>

<style scoped>
.Category {
  background-color: aquamarine;
  width: 150px;
  height: 300px;
}

h3 {
  text-align: center;
  background-color: aqua;
}
</style>