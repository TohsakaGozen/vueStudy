<template>
  <div>
    泷奈可爱捏
    <ul>
      <li v-for="i in images" :key="i.id">
        <router-link
          :to="{
            name: 'image2',
            params: {
              id: i.id,
              name: i.name,
            },
          }"
        >
          {{ i.name }}
        </router-link>
      </li>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "Recoil",
  data() {
    return {
      images: [
        { id: "001", name: "泷奈图1" },
        { id: "002", name: "泷奈图2" },
        { id: "003", name: "泷奈图3" },
      ],
    };
  },
};
</script>

<style>
</style>