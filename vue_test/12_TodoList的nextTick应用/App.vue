<template>
  <div id="Todo">
    <div class="bg"></div>
    <div class="bg2"></div>
    <MyHeader></MyHeader>
    <MyList :todos="todos"></MyList>
    <MyFooter :todos="todos" :allDel="allDel" :allCheck="allCheck"></MyFooter>
  </div>
</template>

<script>
import MyHeader from './components/MyHeader.vue'
import MyList from './components/MyList.vue'
import MyFooter from './components/MyFooter.vue'
import { nanoid } from 'nanoid'

export default {
  name: 'App',
  components: {
    MyHeader,MyFooter,MyList
  },
  data() {
    return {
      todos: JSON.parse(localStorage.getItem('todos')) || [],
      c:false
    }
  },

  methods:{
    addTodo(title){
      //校验数据
      if (title.trim() == '') return alert('输入不能为空')
      //将用户的输入包装成一个todo对象
      const todoObj = { id: nanoid(), title:title, done: false,isEdit:false}
      //通知App组件去添加一个todo对象
      this.todos.push(todoObj)
 
    },

    del(id) {
      this.todos=this.todos.filter((todo)=>{
              return todo.id !=id
      })
    
   },
   set(todo){
     todo.isEdit=true
   },
   allDel(){
     console.log(1)
     for(let i=0;i<this.todos.length;i++){
        if(this.todos[i].done==true){
          this.todos.splice(i,1)
          i--
        }
     }
   },
    allCheck() {
      this.c = !this.c
      let i = 0
      let t = 0
      if (this.c == true) {
        for (i = 0; i < this.todos.length; i++) {
          if (this.todos[i].done == false) {
            this.todos[i].done = true
          }

        }
      }

      if (this.c == false) {
        for (i = 0; i < this.todos.length; i++) {
          if (this.todos[i].done == true)
            t++
        }
        if (t == this.todos.length) {
          for (i = 0; i < this.todos.length; i++) {
            this.todos[i].done = false
          }
        }
      }

    },
  
   

  },
  watch: {
    todos: {
      deep:true,
      handler(value){
        localStorage.setItem('todos', JSON.stringify(value))
      }
    }
  },
  mounted(){
    this.$bus.$on('add', this.addTodo)
    this.$bus.$on('del',this.del)
    this.$bus.$on('set', this.set)
  },
  beforeDestroy(){
    this.$bus.$off('add')
    this.$bus.$off('del')
    this.$bus.$off('set')
  }

}
</script>

<style>
*{
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
#Todo {
  background-size: cover;
  background-color:rgba(246, 242, 238, 0.6);
  width: 50%;
  min-height: 70%;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  box-shadow: 0 0 30px black;
}
.bg{
  background-size: cover;
  opacity: 0.4;
  z-index: -99;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-repeat: no-repeat;
  position: fixed;
  background-image: url(./assets/images/92997183_p0_master1200.jpg);
}
body{
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
