//该文件用于创建Vuex中最为核心的store
//引入Vuex于Vue
import Vue from 'vue'
import addOptions from './count'
import personOptions from './person'
import Vuex from 'vuex'

//应用Vuex插件
Vue.use(Vuex)



//创建并暴露（导出）store
export default new Vuex.Store({
    modules: {
        addAbout: addOptions,
        personAbout: personOptions
    }
})
