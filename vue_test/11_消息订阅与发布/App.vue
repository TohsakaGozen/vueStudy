<template>
    <div class="app">
        <div class="msg">{{msg}}</div>
        <School />
        <Student />
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
    }
},


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