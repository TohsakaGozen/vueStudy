<template>
    <div>
        <Student name="Nako" sex="女" :age="18" self="nako是liela的可爱担当捏"></Student>
        <Student name="Nagi" sex="女" :age="17" self="Nagi是liela的外星人担当捏"></Student>
    </div>
</template>

<script>

import Student from './components/Student.vue'
export default {
    name:'App',
    components:{
    Student
},
}
</script>

<style>

</style>