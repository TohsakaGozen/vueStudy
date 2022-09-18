<template>
  <div>
    <h1>人员列表</h1>
    <h3 style="color: red">上方组件的sum为{{ sum }}</h3>
    <input v-model="name" type="text" placeholder="请输入名字" />
    <button @click="addPerson">添加</button>
    <ul>
      <li v-for="p in personList" :key="p.id">{{ p.name }}</li>
    </ul>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "Person",
  data() {
    return {
      name: "",
    };
  },
  computed: {
    ...mapState(["personList", "sum"]),
  },
  methods: {
    addPerson() {
      this.$store.dispatch("add", this.name);
    },
  },
};
</script>

<style>
</style>