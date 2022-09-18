import App from "./App.vue"
import Vue from 'vue'
//按需引入ElementUI库
import { Button, Row, DatePicker } from 'element-ui'
Vue.config.productionTip = false
Vue.use(Button)
Vue.use(Row)
Vue.use(DatePicker)
new Vue({
    el: '#app',
    render: h => h(App),

})