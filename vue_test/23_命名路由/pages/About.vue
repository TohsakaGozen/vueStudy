<template>
  <div>
    <h3>我是一个About</h3>
    <router-link
      :to="{
        name: 'lycories',
      }"
      active-class="active"
      >Lycories</router-link
    >
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "About",
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