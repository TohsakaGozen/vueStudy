<template>
    <div class="app">
        <div class="msg">{{msg}},{{SchoolName}},{{StudentName}}</div>

        <!-- 通过父组件给子组件传递函数类型的props实现：子给父传递数据 -->
        <School :getSchoolName="getSchoolName" />

        <!-- 通过父组件给子组件绑定一个自定义事件实现：子给父传递数据(第一种写法：使用@或v-on) -->
        <Student v-on:Sakura="getStudentName" @demo="demo" />

        <!-- 通过父组件给子组件绑定一个自定义事件实现：子给父传递数据(第二种写法：使用ref) -->
        <Student ref="student" />
    </div>
</template>

<script>

import School from './components/School.vue'
import Student from './components/Student.vue'
export default {
    name:'App',
    components:{
    Student,
    School
},
data() {
    return {
        msg:'你好啊',
        SchoolName:'',
        StudentName: ''
    }
},

methods:{
    getSchoolName(name){
        console.log(this)
        this.SchoolName=name
    },
    getStudentName(name){
        console.log('getStudentName',name)
        this.StudentName = name
    },
    demo(){
        console.log('demo被调用了')
    }
   
},
    mounted() {
        this.$refs.student.$on('Sakura', this.getStudentName) //绑定自定义事件
        // this.$refs.student.$once('Sakura', this.getStudentName) //绑定自定义事件（一次性）
    }

}
</script>

<style>


.app{
background-color: silver;
}
.msg{
opacity: 0.9;
    display: flex;
    flex-direction: column;
    font-family: fantasy;
    justify-content: center;
    height: 100px;
    align-items: center;
    font-size: 50px;
    margin: 20px;
    padding: 5px;
    background-color: aquamarine;
    border-radius: 20px
}
</style>