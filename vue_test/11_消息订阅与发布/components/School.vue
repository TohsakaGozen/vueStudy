<template>
    <div class="school">
        <h2>学校姓名:{{name}}</h2>
        <h2>学校地址:{{address}}</h2>
    </div>
</template>

<script>
import pubsub from 'pubsub-js'
export default {
    name:'Student',
    data() {
        return {
           name:'樱花',
           address:'日本'
        }
    },
    mounted() {
       // console.log('School', this.x)
    //    this.$bus.$on('hello',(data)=>{
    //     console.log('我是School组件,我收到了',data)
    //    })
   this.pubid= pubsub.subscribe('hello',(msgName,data)=>{
        console.log('有人发布了hello消息,',msgName,'消息发送成功',data)
       })
    },
    beforeDestroy() {
      //  this.$bus.$off('hello')
      pubsub.unsubscribe(this.pubid)
    }
}
</script>

<style scoped>
.school{
    opacity: 0.9;
    display: flex;
    flex-direction: column;
    font-family: fantasy;
    justify-content: center;
    align-items: center;
    font-size: 20px;
    margin: 20px;
    padding: 5px;
    background-color: aquamarine;
    border-radius: 20px
}
</style>