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
}
const mutations = {
    JIA(state, value) {
        state.sum += value
    },
    JIAN(state, value) {
        state.sum -= value
    },
    ADD_PERSON(state, personObj) {
        state.personList.unshift(personObj)
    }
}
const state = {
    sum: 0,
    fetters: '主宰',
    hero: '蒙多医生',
    personList: [
        {id: '001', name: '张三'}
    ]
}

const getters = {
    bigSum(state) {
        return state.sum * 10
    }
}

export default new Vuex.Store({
    actions,
    mutations,
    state,
    getters
})