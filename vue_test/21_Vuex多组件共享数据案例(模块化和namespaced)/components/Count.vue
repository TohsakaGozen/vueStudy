<template>
  <div>
    <h1>当前求和为{{ sum }}</h1>
    <h3>当前求和方法10倍后为:{{ bigSum }}</h3>
    <h3>我在{{ school }},学习{{ subject }}</h3>
    <h3 style="color: red">下方组件的总人数为：{{ personList.length }}</h3>
    <section>
      <select v-model.number="n" name="" id="">
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
      </select>
      <button @click="increment(n)">+</button>
      <button @click="decrement(n)">-</button>
      <button @click="incrementOdd(n)">和为奇数时再加</button>
      <button @click="incrementWait(n)">等一下再加</button>
    </section>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapMutations, mapState } from "vuex";
export default {
  name: "Count",
  data() {
    return {
      n: 1,
    };
  },
  computed: {
    //借助mapState生成计算属性，从state中获取数据（对象写法）
    // ...mapState({ sum: "sum", school: "school", subject: "subject" }),
    //借助mapState生成计算属性，从state中获取数据（数组写法）
    ...mapState("addAbout", ["sum", "school", "subject"]),
    ...mapState("personAbout", ["personList"]),
    //.............................................................................
    //借助mapGetters生成计算属性，从getters中获取数据（对象写法）
    //...mapGetters({ bigSum: "bigSum" }),
    //借助mapGetters生成计算属性，从getters中获取数据（数组写法）
    ...mapGetters("addAbout", ["bigSum"]),
  },
  methods: {
    //借助程序员亲自写
    // increment() {
    //   this.$store.commit("JIA", this.n);
    // },
    // decrement() {
    //   this.$store.commit("JIAN", this.n);
    // },
    //借助mapMutations生成对应的方法，方法中会调用commit去联系mutations(对象写法)
    ...mapMutations("addAbout", { increment: "JIA", decrement: "JIAN" }),
    //借助mapMutations生成对应的方法，方法中会调用commit去联系mutations(数组写法)
    // ...mapMutations(["JIA", "JIAN"]),
    //.......................................................................
    //借助程序员亲自写
    // incrementOdd() {
    //   this.$store.dispatch("jiaOdd", this.n);
    // },
    // incrementWait() {
    //   this.$store.dispatch("jiaWait", this.n);
    // },
    //借助mapActions生成对应的方法，方法中会调用dispatch去联系actions(对象写法)
    ...mapActions("addAbout", {
      incrementOdd: "jiaOdd",
      incrementWait: "jiaWait",
    }),
    //借助mapActions生成对应的方法，方法中会调用dispatch去联系actions(数组写法)
    //...mapActions(["jiaOdd","jiaWait"]),
  },
  mounted() {},
};
</script>

<style scoped>
button {
  margin-left: 10px;
}
</style>