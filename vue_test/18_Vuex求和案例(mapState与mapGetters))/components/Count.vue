<template>
  <div>
    <h1>当前求和为{{ sum }}</h1>
    <h3>当前求和方法10倍后为:{{ bigSum }}</h3>
    <h3>我在{{ school }},学习{{ subject }}</h3>
    <section>
      <select v-model.number="n" name="" id="">
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
      </select>
      <button @click="increment">+</button>
      <button @click="decrement">-</button>
      <button @click="incrementOdd">和为奇数时再加</button>
      <button @click="incrementWait">等一下再加</button>
    </section>
  </div>
</template>

<script>
import { mapGetters, mapState } from "vuex";
export default {
  name: "Count",
  data() {
    return {
      n: 1,
    };
  },
  computed: {
    //靠程序员自己亲自去写计算属性
    // he() {
    //   return this.$store.state.sum;
    // },
    // xuexiao() {
    //   return this.$store.state.school;
    // },
    // xueke() {
    //   return this.$store.state.subject;
    // },
    //借助mapState生成计算属性，从state中获取数据（对象写法）
    // ...mapState({ sum: "sum", school: "school", subject: "subject" }),
    //借助mapState生成计算属性，从state中获取数据（数组写法）
    ...mapState(["sum", "school", "subject"]),
    //.............................................................................

    //靠程序员自己亲自去写计算属性
    // bigSum() {
    //   return this.$store.getters.bigSum;
    // },
    //借助mapGetters生成计算属性，从getters中获取数据（对象写法）
    //...mapGetters({ bigSum: "bigSum" }),
    //借助mapGetters生成计算属性，从getters中获取数据（数组写法）
    ...mapGetters(["bigSum"]),
  },
  methods: {
    increment() {
      this.$store.commit("JIA", this.n);
    },
    decrement() {
      this.$store.commit("JIAN", this.n);
    },
    incrementOdd() {
      this.$store.dispatch("jiaOdd", this.n);
    },
    incrementWait() {
      this.$store.dispatch("jiaWait", this.n);
    },
  },
  mounted() {},
};
</script>

<style scoped>
button {
  margin-left: 10px;
}
</style>