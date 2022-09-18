<template>
  <ul>
    <li>图图编号：{{ $route.params.id }}</li>
    <li>图图人：{{ $route.params.name }}</li>
  </ul>
</template>

<script>
export default {
  name: "Image2",
};
</script>

<style>
</style>