<template>
  <div class="box1">
    <div>
      <input type="checkbox" v-model="todo.done">
      <span v-show="!todo.isEdit">{{todo.title}}</span>
      <input ref="input" id="edit" type="text" v-show="todo.isEdit" v-model="todo.title" @keyup.enter="Fset" @blur="Fset">
    </div>
    <div>
      <button v-show="!todo.isEdit" class="btn" @click="set">修改</button>
      <button class="btn" @click="del">删除</button>
    </div>

  </div>
</template>

<script>
export default {
name:'MyItem',
//声明接受todo对象
props:['todo'],
methods: {
  del(){
    this.$bus.$emit('del',this.todo.id)
  },
  set() {
    this.$bus.$emit('set',this.todo)
    this.$nextTick(function(){
      this.$refs.input.focus()
    })
  },
  Fset(){
    this.todo.isEdit = false
  }
  
},

// updated(){
//   this.$refs.input.focus()
// }
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
    background-color: rgb(225, 244, 244,0.8);
}
.btn{
    width: 10%;
   min-height: 90%;
   margin-left: 5px;
    font-size: 5px;
    width: 50px;
    border-radius: 5px;
    height: 20px;
    background-color: rgb(188, 233, 233);
}
.btn:hover{
  background-color: rgb(148, 180, 180);
}
#edit{
  width: 100px;
  height: 25px;
  border-radius: 5px;

  margin-left: 3px;
}
</style>