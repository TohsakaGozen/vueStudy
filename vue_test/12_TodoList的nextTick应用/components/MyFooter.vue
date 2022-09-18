<template>
    <div class="box2" >
        <div>
            <input type="checkbox" :checked="checks==todos.length&&this.checks>0"  @click="allCheck">全选
        </div>
        <span>已完成{{checks}}/{{todos.length}}</span>
        <button @click="allDel">删除所选项目</button>
    </div>
</template>

<script>
export default {
name:'MyFooter',
props:['todos','allDel','allCheck'],
data() {
    return {
        c:false
    }
},
computed:{
    checks(){
        //普通写法
        // let c=0
        // let i =0
        // for(i;i<this.todos.length;i++){
        //     if (this.todos[i].done == true) 
        //         c++
        // }
        // return c

    //利用es6里的reduce方法
//   return  this.todos.reduce((pre,current)=>pre+(current.done ? 1 : 0),0)

  //利用filter方法
  const x=this.todos.filter((todo)=>{
    return todo.done==true
  })
  return x.length

    }
},


}
</script>

<style scoped>





.box2{
    margin: 20px;
    width: 80%;
    min-height: 5%;
    text-align: center;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
}
button {
    background-color:rgb(209, 228, 228);
    border: 1px black solid;
    border-radius: 5px;
    padding-left: 5px;
    padding-right: 5px;
}

button:hover{
    background-color:rgb(162, 205, 205)
}
</style>