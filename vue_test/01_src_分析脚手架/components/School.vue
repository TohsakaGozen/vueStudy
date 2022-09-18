<template>
    <!-- 组件的结构 -->
    <div class="demo">
        <h2>学校地址：{{name}}</h2>
        <h2>学校地址：{{address}}</h2>
        <button @click="Show">点我提示学校名</button>
    </div>
</template>

<script>
//组件的交互相关的代码（数据、方法等等）
export default {
    name: 'School',
    data() {
        return {
            name: '托雷森学院',
            address: 'Japan'
        }
    },
    methods: {
        Show() {
            alert(this.name)
        }
    },
}
</script>

<style>
/* 组建的样式 */
.demo {
    background-color: orange;
}
</style>