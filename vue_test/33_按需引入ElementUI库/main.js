import App from "./App.vue"
import Vue from 'vue'
//按需引入ElementUI库
import { Carousel } from 'element-ui'
Vue.config.productionTip = false
Vue.use(Carousel)
new Vue({
    el: '#app',
    render: h => h(App),

})