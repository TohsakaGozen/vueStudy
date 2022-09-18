<template>
  <div class="box">
    <Header />
    <div class="item">
      <Nav />
      <List />
    </div>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Nav from "./components/Nav.vue";
import List from "./components/List.vue";
export default {
  name: "App",
  components: {
    Header,
    Nav,
    List,
  },
};
</script>

<style>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
body {
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.item {
  width: 110%;
  display: flex;
  flex-direction: row;
}
.box {
  width: 500px;
  height: 500px;
}
</style>