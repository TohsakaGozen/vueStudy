<template>
    <div id="school">
        <h2>学生姓名:{{name}}</h2>
        <h2>学生性别:{{sex}}</h2>
        <h2>学生年龄:{{Myage}}</h2>
        <h2>{{msg}}</h2>
        <h2>{{self}}</h2>
        <button @click="updateAge" >尝试修改收到的年龄</button>
    </div>
</template>

<script>

export default {
    name:'Student',
    data() {
        return {
            msg:'我来自liela!',
           Myage:this.age
        }
    },
    //简单声明接受
    // props:['name','age','sex','self'] 

    //接受的同时对数据进行类型限制
    // props:{
    //     name:String,
    //     age:Number,
    //     sex:String,
    //     self:String
    // }

   //// 接受的同时对数据进行类型限制,默认值指定和必要性的限制
    props:{
        name: {
            type: String,
            required: true,
            default:99
        },
        age: {
            type: Number,
            required: true,
            default: 99
        }, 
        sex: {
            type: String,
            required: true
        },
        self:{
            type: String,
            required: true
        }
    },

    methods:{
        updateAge(){
            this.Myage++
        }
    }
       
    
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