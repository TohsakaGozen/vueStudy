<template>
  <div style="width: 800px; height: 30vw; margin-top: 80px">
    <el-carousel :interval="4000" type="card" height="25vw" loop="true">
      <el-carousel-item v-for="(item, index) in urls" :key="index">
        <img v-bind:src="item.url" style="width: 100%; height: 100%" />
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
export default {
  name: "MIniDirection",
  data() {
    return {
      urls: [
        {
          url: require("C:UsersTohsakaDesktop\vue_testpublic屏幕截图 2022-07-16 160637.jpg"),
        },
        {
          url: require("C:UsersTohsakaDesktop\vue_testpublic屏幕截图 2022-07-16 160637.jpg"),
        },
        {
          url: require("C:UsersTohsakaDesktop\vue_testpublic屏幕截图 2022-07-16 160637.jpg"),
        },
        {
          url: require("C:UsersTohsakaDesktop\vue_testpublic屏幕截图 2022-07-16 160637.jpg"),
        },
        {
          url: require("C:UsersTohsakaDesktop\vue_testpublic屏幕截图 2022-07-16 160637.jpg"),
        },
      ],
    };
  },
};
</script>

<style scoped>
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 200px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
</style>