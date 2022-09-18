<template>
    <div class="school">
        <h2>学校姓名:{{name}}</h2>
        <h2>学校地址:{{address}}</h2>
    </div>
</template>

<script>
export default {
    name:'Student',
    data() {
        return {
           name:'樱花',
           address:'日本'
        }
    },
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