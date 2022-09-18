<template>
  <ul>
    <li>图图编号：{{ id }}</li>
    <li>图图人：{{ name }}</li>
  </ul>
</template>

<script>
export default {
  name: "Image",
  props: ["id", "name"],
};
</script>

<style>
</style>