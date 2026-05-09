import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const actions = {
    // jia(context, value) {
    //     context.commit('JIA', value)
    // },
    // jian(context, value) {
    //     context.commit('JIAN', value)
    // },
    jiaOdd(context, value) {
        // 将逻辑判断写到actions中
        // if(context.state.num %2) {
        //     context.commit('JIA', value)
        // }
        // 将逻辑判断写到组件中
        context.commit('JIA', value)
    },
    jiaWait(context, value) {
        setTimeout(() => {
            context.commit('JIA', value)
        }, 500)
    }
}
const mutations = {
    JIA(state, value) {
        state.num += value
    },
    JIAN(state, value) {
        state.num -= value
    }
}
const state = {
    num: 0
}

const getters = {
    bigSum(state) {
        return state.num * 10
    }
}

export default new Vuex.Store({
    actions,
    mutations,
    state,
    getters
})