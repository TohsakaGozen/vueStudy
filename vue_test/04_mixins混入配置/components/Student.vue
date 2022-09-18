<template>
    <div id="school">
        <h2 @click="showName">学生姓名:{{name}}</h2>
        <h2>学生性别:{{sex}}</h2>
    </div>
</template>

<script>
import {hunhe,hunhe2} from '../mixin'
export default {
    name:'Student',
    data() {
        return {
           name:'nako',
           sex:'女'
        }
    },
    
    mixins:[hunhe,hunhe2]
}
</script>

<style>
#school{
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