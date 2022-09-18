//该文件用于创建Vuex中最为核心的store
//引入Vuex于Vue
import Vue from 'vue'
import Vuex from 'vuex'
//应用Vuex插件
Vue.use(Vuex)

//准备actions==用于响应组件中的动作
const actions = {
    // jia(context, value) {
    //     context.commit('JIA', value)
    // },
    // jian(context, value) {
    //     context.commit('JIAN', value)
    // },
    jiaOdd(context, value) {
        if (context.state.sum % 2) {
            context.commit('JIAODD', value)
        }
    },
    jiaWait(context, value) {
        setTimeout(() => {
            context.commit('JIAWAIT', value)
        }, 1000);
    }
}

//准备mutations==用于操作数据(state)
const mutations = {
    JIA(state, value) {
        state.sum += value
        console.log(state.sum)
    },
    JIAN(state, value) {
        state.sum -= value
    },
    JIAODD(state, value) {
        state.sum += value
    },
    JIAWAIT(state, value) {
        state.sum += value
    }
}

//准备state==用于存储数据
const state = {
    sum: 0,
    school: 'Sakura',
    subject: 'Idol'
}

//准备getters——用于将state中的数据进行加工
const getters = {
    bigSum(state) {
        return state.sum * 10
    }
}
//创建并暴露（导出）store
export default new Vuex.Store({
    actions,
    mutations,
    getters,
    state,
})
