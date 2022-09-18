<template>
  <section class="box">
    <MyItem v-for="(todoObj) in todos" :key="todoObj.id" :todo="todoObj"></MyItem>
  </section>
</template>

<script>
import MyItem from './MyItem.vue'
export default {
name:'MyList',
components:{
    MyItem
},
props:['todos'],
methods:{

}
}
</script>

<style scoped>
.box{
  padding: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
  width: 90%;
  min-height: 75%;
  box-shadow: 0 0 8px black;
  border-radius: 10px
}
</style>