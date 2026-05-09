import Vue from 'vue'
import Vuex from 'vuex'
import CountOptions from './count'
import PersonOptions from './person'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        CountOptions,
        PersonOptions
    } 
})