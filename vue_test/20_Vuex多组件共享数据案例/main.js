import App from "./App.vue"
import Vue from 'vue'
//引入store
import store from './store/index'

Vue.config.productionTip = false

new Vue({
    el: '#app',
    render: h => h(App),
    store,
})