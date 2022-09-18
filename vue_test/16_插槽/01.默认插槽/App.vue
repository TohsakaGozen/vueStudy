<template>
  <div class="container">
    <Category title="美食" :listData="foods">
      <img
        src="../12_TodoList的nextTick应用/assets/images/92938824_p0_master1200.jpg"
        alt=""
      />
    </Category>
    <Category title="游戏" :listData="games" />
    <Category title="动画" :listData="anilmals" />
  </div>
</template>

<script>
import Category from "./components/Category.vue";

export default {
  components: { Category },
  name: "App",
  data() {
    return {
      foods: ["火锅", "可乐", "饼干"],
      games: ["碧蓝航线", "原神", "赛马娘"],
      anilmals: ["街角魔族", "奥特曼", "假面骑士"],
    };
  },
};
</script>

<style>
.container {
  display: flex;
  justify-content: space-around;
}
img {
  width: 100%;
  height: 50%;
}
</style>