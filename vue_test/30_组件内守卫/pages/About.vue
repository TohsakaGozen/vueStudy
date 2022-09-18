<template>
  <div>
    <h3>我是一个About</h3>
  </div>
</template>

<script>
export default {
  name: "About",
  //通过路由规则，进入该组件时被调用
  beforeRouteEnter(to, from, next) {
    if (localStorage.getItem("school") === "Sakura") {
      next();
    } else {
      alert("权限不够捏，请修改localStora的值捏");
    }
  },
  //通过路由规则，离开该组件时被调用
  beforeRouteLeave(to, from, next) {
    next();
  },
};
</script>

<style scoped>
.active {
  background-color: aqua;
}
a {
  text-decoration: none;
}
</style>