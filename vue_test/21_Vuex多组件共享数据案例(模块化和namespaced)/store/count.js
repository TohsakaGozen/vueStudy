const addOptions = {
    namespaced: true,
    actions: {
        jiaOdd(context, value) {
            if (context.state.sum % 2) {
                context.commit('JIAODD', value)
            }
        },
        jiaWait(context, value) {
            setTimeout(() => {
                context.commit('JIAWAIT', value)
            }, 1000);
        },
    },
    mutations: {
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
        },
    },
    state: {
        sum: 0,
        school: 'Sakura',
        subject: 'Idol',
    },
    getters: {
        bigSum(state) {
            return state.sum * 10
        }
    }
}

export default addOptions