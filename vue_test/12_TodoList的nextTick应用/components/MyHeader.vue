<template>
  <div class="headerBox">
    <h2><em>Tohsakaの任务清单</em></h2>
    <input @keyup.enter="add" v-model="title" class="put" type="text" placeholder="请输入你的任务名称，按回车确认">
  </div>

</template>

<script>

export default {
  name: 'MyHeader',
  data() {
    return {
      title:''
    }
  },
  methods:{
    add(){
     this.$bus.$emit('add',this.title)
      //清空输入框
      this.title = ''
    },
  },
}
</script>

<style scoped>

.headerBox{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
}
.put {
  border-radius: 5px;
  width: 70%;
  height: 30px;
}
</style>