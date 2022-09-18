import axios from 'axios'
import { nanoid } from 'nanoid'
const personOptions = {
    namespaced: true,
    actions: {
        add(context, value) {
            context.commit('ADD', value)
        },
        addPersonServe(context) {
            axios.get('https://api.uixsj.cn/hitokoto/get?type=game').then(
                response => {
                    context.commit('ADD', response.data)
                },
                error => {
                    alert(error.message)
                }
            )
        }
    },
    mutations: {
        ADD(state, value) {
            state.personList.unshift({ id: nanoid(), name: value })
        }
    },
    state: {
        personList: [
            { id: '001', name: '特别周' },
            { id: '002', name: '目白麦昆' },
            { id: '003', name: '东海帝王' },
            { id: '004', name: '无声铃鹿' },
        ]
    },
    getters: {
        personFirst(state) {
            return state.personList[0].name
        }
    }
}

export default personOptions