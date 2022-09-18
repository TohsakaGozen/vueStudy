import App from "./App.vue"
import Vue from 'vue'
//引入ElementUI组件库
import ElementUI from 'element-ui'
//引入ElementUi全部样式
import 'element-ui/lib/theme-chalk/index.css'
Vue.config.productionTip = false

Vue.use(ElementUI)
new Vue({
    el: '#app',
    render: h => h(App),

})