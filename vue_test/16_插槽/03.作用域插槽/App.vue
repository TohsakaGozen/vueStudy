<template>
  <div class="container">
    <Category title="动画" :listData="anilmals">
      <template scope="{anilmals}">
        <ul>
          <li v-for="(anil, index) in anilmals" :key="index">
            {{ anil }}
          </li>
        </ul>
      </template>
    </Category>
    <Category title="动画" :listData="anilmals">
      <template scope="{anilmals}">
        <ol>
          <li v-for="(anil, index) in anilmals" :key="index">
            {{ anil }}
          </li>
        </ol>
      </template>
    </Category>
    <Category title="动画" :listData="anilmals">
      <template scope="{anilmals}">
        <h4>
          <li v-for="(anil, index) in anilmals" :key="index">
            {{ anil }}
          </li>
        </h4>
      </template>
    </Category>
  </div>
</template>

<script>
import Category from "./components/Category.vue";

export default {
  components: { Category },
  name: "App",
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