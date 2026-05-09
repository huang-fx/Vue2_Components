export default {
    namespaced: true,
    actions: {
        jiaOdd(context, value) {
        // 将逻辑判断写到actions中
            if(context.state.sum %2) {
                context.commit('JIA', value)
            }
        // 将逻辑判断写到组件中
        // context.commit('JIA', value)
        },
        jiaWait(context, value) {
            setTimeout(() => {
                context.commit('JIA', value)
            }, 500)
        }
    },
    mutations: {
        JIA(state, value) {
            state.sum += value
        },
        JIAN(state, value) {
            state.sum -= value
        },
    },
    state: {
        sum: 0,
        fetters: '主宰',
        hero: '蒙多医生',
    },
    getters: {
        bigSum(state) {
            return state.sum * 10
        }
    }
}