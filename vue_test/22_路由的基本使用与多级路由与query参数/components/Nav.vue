<template>
  <div>
    <ul>
      <!-- Vue中借助router-link标签实现路由的切换 -->
      <router-link to="/about" active-class="active">
        <li>About</li>
      </router-link>
      <router-link to="/home" active-class="active">
        <li>Home</li>
      </router-link>
    </ul>
    <div></div>
  </div>
</template>

<script scoped>
export default {};
</script>

<style scoped>
.active li {
  background-color: aquamarine;
}
a {
  text-decoration: none;
}

ul {
  width: 100px;
  margin-top: 30px;
  margin-right: 10px;
  box-shadow: 0 0 10px rgb(97, 96, 96);
}
li {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  list-style: none;
  border: 1px;
  border-color: black;
  border-style: solid;
  height: 50px;
}
</style>