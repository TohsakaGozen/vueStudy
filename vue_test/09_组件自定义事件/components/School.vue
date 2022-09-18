<template>
    <div class="school">
        <h2>学校姓名:{{name}}</h2>
        <h2>学校地址:{{address}}</h2>
        <button @click="sendSchoolName(name)">点我将学校名传递给app</button>
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
    props: ['getSchoolName'],
    methods:{
        sendSchoolName(){
            this.getSchoolName(this.name)
        }
    }
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