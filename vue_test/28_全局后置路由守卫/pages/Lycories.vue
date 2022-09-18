<template>
  <div>
    千束可爱捏
    <ul>
      <li v-for="i in images" :key="i.id">
        <!-- 跳转路由携带params参数，to的字符串写法 -->
        <!-- <router-link :to="`/about/lycories/image/${i.id}/${i.name}`">{{ i.name }}</router-link> -->

        <!-- 跳转路由携带paprams参数，to的对象写法 -->
        <router-link
          :to="{
            name: 'image1',
            params: {
              id: i.id,
              name: i.name,
            },
          }"
        >
          {{ i.name }}
        </router-link>
        <button @click="pushShow(i)">push查看</button>
        <button @click="replaceShow(i)">replace查看</button>
      </li>
    </ul>

    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "Lycories",
  data() {
    return {
      images: [
        { id: "001", name: "千束图1" },
        { id: "002", name: "千束图2" },
        { id: "003", name: "千束图3" },
      ],
    };
  },
  methods: {
    pushShow(i) {
      this.$router.push({
        name: "image1",
        params: {
          id: i.id,
          name: i.name,
        },
      });
    },
    replaceShow(i) {
      this.$router.replace({
        name: "image1",
        params: {
          id: i.id,
          name: i.name,
        },
      });
    },
  },
};
</script>

<style socped>
li {
  list-style: none;
}
a {
  text-decoration: none;
}
</style>