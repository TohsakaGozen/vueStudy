<template>
    <!-- 组件的结构 -->
    <div class="demo">
        <h2>学生姓名：{{ name }}</h2>
        <h2>学生年龄：{{ age }}</h2>
        <button @click="Show">点我提示学生名</button>
    </div>

</template>

<script>
//组件的交互相关的代码（数据、方法等等）
export default {
    name: 'Student',
    data() {
        return {
            name: '小栗帽',
            age: '18'
        }
    },
    methods: {
        Show() {
            alert(this.name)
        }
    },
}

school
</script>

<style>
/* 组建的样式 */
.demo {
    background-color: orange;
}
</style>