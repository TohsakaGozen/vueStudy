<template>
  <div>
    <img src="./assets/logo.png" alt="logo">
    <Student></Student>
    <School></School>

  </div>
</template>

<script>
//引入组件
import School from './components/School'
import Student from './components/Student'

  export default {
    name:'App',
    //注册组件
    components:{
        School,
        Student
    }
}
</script>
