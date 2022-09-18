<template>
  <div class="box1">
    <div> <input type="checkbox" v-model="todo.done"><span>{{todo.title}}</span></div>
    <button id="btn" @click="del(todo.id)">删除</button>
  </div>
</template>

<script>
export default {
name:'MyItem',
//声明接受todo对象
props:['todo','del'],
methods: {
  Handle(){

  }
},
}
</script>

<style>

.box1{
  margin: 2px;
    padding: 5px;
    align-items: center;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    border: 1px black solid;
    border-radius: 5px;
    min-height: 8%;
    background-color: aqua;
}
#btn{
    width: 10%;
   min-height: 90%;
    font-size: 5px;
    width: 50px;
    border-radius: 5px;
    height: 20px;
    background-color: rgb(53, 233, 233);
}
#btn:hover{
  background-color: aqua;
}
</style>