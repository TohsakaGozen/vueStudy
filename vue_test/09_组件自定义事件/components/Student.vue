<template>
    <div class="student">
        <h2>学生姓名:{{name}}</h2>
        <h2>学生性别:{{sex}}</h2>
        <h2>当前求和为:{{n}}</h2>
        <button @click="add">点我n++</button>
        <button @click="sendStudentName">点我把学生名给app（Sakura事件）</button>
        <button @click="unbind">解绑Sakura事件</button>
        <button @click="death">销毁当前Student组件的实例对象(vc)</button>
    </div>
</template>

<script>

export default {
    name:'Student',
    data() {
        return {
           name:'nako',
           sex:'女',
           n:0
        }
    },
    methods:{
        add(){
            console.log('add被调用了')
            this.n++
        },
        sendStudentName(){
            //触发Student组件实例的Sakura事件
            this.$emit('Sakura',this.name)
            //this.$emit('demo')
        },
        unbind(){
            this.$off('Sakura') //解绑一个自定义事件
            //this.$off(['Sakura','demo'])//解绑多个事件
            //this.$off()//暴力解绑：所有自定义都解绑
        },
        death(){
            this.$destroy()//销毁了当前Student组件的实例对象,销毁后所有Student实例的自定义事件全都不奏效了
        }
    }
    
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