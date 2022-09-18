<template>
  <input @keyup.enter="add" v-model="title"  class="put"  type="text" placeholder="请输入你的任务名称，按回车确认">
</template>

<script>
import {nanoid} from 'nanoid'
export default {
  name: 'MyHeader',
  data() {
    return {
      title:''
    }
  },
  methods:{
    add(e){
      //校验数据
      if(this.title.trim()=='') return alert('输入不能为空')
      //将用户的输入包装成一个todo对象
      const todoObj={id:nanoid(),title:this.title,done:false}
      //通知App组件去添加一个todo对象
      this.addTodo(todoObj)
      //清空输入框
      this.title=''
    },
  },
  props: ['addTodo']
}
</script>

<style scoped>
.put {
  border-radius: 5px;
  width: 90%;
  height: 30px;
}
</style>