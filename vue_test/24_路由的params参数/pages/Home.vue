<template>
  <div>
    <h3>我是一个Home</h3>
    <router-link
      :to="{
        name: 'recoil',
      }"
      active-class="active"
      >Recoil</router-link
    >
    <router-view></router-view>
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