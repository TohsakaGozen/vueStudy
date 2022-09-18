<template>
    <div>
        <button @click="isShow=!isShow">显示/隐藏</button>
        <transition appear name="Sakura">
            <h1 v-show="isShow">你好哇</h1>
        </transition>
    </div>
</template>

<script>
export default {
    name:'Test2',
    data (){
        return {
            isShow:true
        }
    }
}
</script>

<style scoped>











h1{
    background-color: aquamarine;
}
/* 进入的起点 ,离开的终点*/
.Sakura-enter,.Sakura-leave-to{
    transform: translateX(-100%);
}
.Sakura-enter-active,.Sakura-leave-active{
        transition: 2s linear;
}
/* 进入的终点，离开的起点*/
.Sakura-enter-to,.Sakura-leave{
    transform: translateX(0);
}
</style>