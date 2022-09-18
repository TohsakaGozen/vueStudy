<template>
  <div>
    <h3>我是一个Home</h3>
    <router-link
      tag="button"
      :to="{
        name: 'lycories',
      }"
      active-class="active"
      >Lycories</router-link
    >
    <router-link
      tag="button"
      :to="{
        name: 'recoil',
      }"
      active-class="active"
      >Recoil</router-link
    >
    <!-- 缓存多个路由组件 -->
    <!--  <keep-alive :include="['Recoil','Lycories']"> -->
    <keep-alive include="Recoil">
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: "Home",
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