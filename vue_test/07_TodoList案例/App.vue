<template>
  <div id="Todo">
    <div class="bg"></div>
    <div class="bg2"></div>
    <MyHeader :addTodo="addTodo"></MyHeader>
    <MyList :todos="todos" :del="del"></MyList>
    <MyFooter :todos="todos" :allDel="allDel" :allCheck="allCheck"></MyFooter>
  </div>
</template>

<script>
import MyHeader from './components/MyHeader.vue'
import MyList from './components/MyList.vue'
import MyFooter from './components/MyFooter.vue'

export default {
  name: 'App',
  components: {
    MyHeader, MyFooter, MyList
  },
  data() {
    return {
      todos: JSON.parse(localStorage.getItem('todos')) || [],
      c: false
    }
  },

  methods: {
    addTodo(x) {
      this.todos.unshift(x)
    },

    del(id) {
      console.log(id)
      this.todos = this.todos.filter((todo) => {
        return todo.id != id
      })

    },
    allDel() {
      console.log(1)
      for (let i = 0; i < this.todos.length; i++) {
        if (this.todos[i].done == true) {
          this.todos.splice(i, 1)
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
      deep: true,
      handler(value) {
        localStorage.setItem('todos', JSON.stringify(value))
      }
    }
  }

}
</script>

<style>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

#Todo {
  background-size: cover;
  background-color: rgba(246, 242, 238, 0.6);
  width: 50%;
  min-height: 70%;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  box-shadow: 0 0 30px black;
}

.bg {
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

body {
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
