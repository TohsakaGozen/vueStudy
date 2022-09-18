<template>
    <div>
        <button @click="isShow=!isShow">显示/隐藏</button>
        <transition-group appear name="Sakura">
            <h1 v-show="isShow" key="1">你好哇</h1>
            <h1 v-show="isShow" key="2">你好啊</h1>
        </transition-group>
    </div>
</template>

<script>
export default {
    name:'Test',
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
.Sakura-enter-active{
    animation: Sakura 1s linear;
}
.Sakura-leave-active{
    animation: Sakura 1s linear reverse;
}

@keyframes Sakura{
    from{
        transform: translateX(-100%);
    }
    to{
        transform: translateX(0px);
    }
}
</style>