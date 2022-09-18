import Vue from "vue"

export default {
    install(Vue) {
        console.log(Vue)
    }
}

Vue.prototype.hello = () => { alert('你好呀') }