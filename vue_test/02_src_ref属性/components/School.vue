<template>
    <div id="school">
        <h2>学校名称:{{name}}</h2>
        <h2>学校地址:{{address}}</h2>
    </div>
</template>

<script>
export default {
    name:'School',
    data() {
        return {
            name:'虹咲学院',
            address:'日本'
        }
    },
}
</script>

<style>
#school{
    text-align: center;
    font-size: 20px;
    margin: 20px;
    padding: 5px;
    background-color: aquamarine;
    border-radius: 20px
}
</style>