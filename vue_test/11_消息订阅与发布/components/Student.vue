<template>
    <div class="student">
        <h2>学生姓名:{{name}}</h2>
        <h2>学生性别:{{sex}}</h2>
        <button @click="sendStudentName">把学生名给School组件</button>
     </div>
</template>

<script>
import pubsub from 'pubsub-js'
export default {
    name:'Student',
    data() {
        return {
           name:'nako',
           sex:'女',
        }
    },
    methods:{
        sendStudentName() {          
            //this.$bus.$emit('hello', this.name)
            pubsub.publish('hello',666)
        }
    }, 
}
</script>

<style scoped>
.student{
    opacity: 0.9;
    display: flex;
    flex-direction: column;
    font-family: fantasy;
    justify-content: center;
    align-items: center;
    font-size: 20px;
    margin: 20px;
    padding: 5px;
    background-color: rgb(165, 226, 206);
    border-radius: 20px
}
</style>