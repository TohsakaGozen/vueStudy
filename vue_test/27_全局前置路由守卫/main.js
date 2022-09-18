import App from "./App.vue"
import Vue from 'vue'
//引入 VueRouter
import VueRouter from 'vue-router'
//引入路由器
import router from './router'
Vue.config.productionTip = false
Vue.use(VueRouter)

new Vue({
    el: '#app',
    render: h => h(App),
    router,
})