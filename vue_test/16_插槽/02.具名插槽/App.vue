<template>
  <div class="container">
    <Category title="美食" :listData="foods">
      <img
        slot="center"
        src="../12_TodoList的nextTick应用/assets/images/92938824_p0_master1200.jpg"
        alt=""
      />
      <a href="" slot="footer"> 更多美食 </a>
    </Category>
    <Category title="游戏" :listData="games">
      <a href="" slot="footer"> 更多游戏 </a>
    </Category>
    <Category title="动画" :listData="anilmals">
      <template v-slot:footer>
        <a href="" slot="footer"> 更多动画 </a>
        <h4 slot="footer">欢迎观看</h4>
      </template>
    </Category>
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

<style scoped>
.container {
  display: flex;
  justify-content: space-around;
}
img {
  width: 90%;
  height: 50%;
}
a {
  display: flex;
  justify-content: center;
}
h4 {
  text-align: center;
}
</style>