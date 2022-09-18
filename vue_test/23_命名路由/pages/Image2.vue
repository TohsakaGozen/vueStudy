<template>
  <ul>
    <li>图图编号：{{ $route.query.id }}</li>
    <li>图图人：{{ $route.query.name }}</li>
  </ul>
</template>

<script>
export default {
  name: "Image2",
};
</script>

<style>
</style>