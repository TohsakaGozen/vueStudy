<template>
  <div>
    <h1>人员列表</h1>
    <h3 style="color: red">上方组件的sum为{{ sum }}</h3>
    <input v-model="name" type="text" placeholder="请输入名字" />
    <h3>列表中第一个是{{ personFirst }}</h3>
    <button @click="addPerson">添加</button>
    <button @click="addPersonServer">添加一个随机语句</button>
    <ul>
      <li v-for="p in personList" :key="p.id">{{ p.name }}</li>
    </ul>
  </div>
</template>

<script>
import { mapGetters, mapState } from "vuex";
export default {
  name: "Person",
  data() {
    return {
      name: "",
    };
  },
  computed: {
    ...mapState("personAbout", ["personList"]),
    ...mapState("addAbout", ["sum"]),
    ...mapGetters("personAbout", ["personFirst"]),
  },
  methods: {
    addPerson() {
      this.$store.dispatch("personAbout/add", this.name);
    },
    addPersonServer() {
      this.$store.dispatch("personAbout/addPersonServe");
    },
  },
};
</script>

<style>
</style>