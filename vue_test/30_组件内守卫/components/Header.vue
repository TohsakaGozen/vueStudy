<template>
  <div>
    <h2>Vue Router Demo</h2>
    <button @click="back">后退</button>
    <button @click="forward">前进</button>
    <button @click="test">测试一下go</button>
    <hr />
  </div>
</template>

<script>
export default {
  name: "Header",
  methods: {
    back() {
      this.$router.back();
    },
    forward() {
      this.$router.forward();
    },
    test() {
      this.$router.go(3);
    },
  },
};
</script>

<style>
</style>