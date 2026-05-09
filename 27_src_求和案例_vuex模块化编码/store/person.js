import axios from 'axios'
import {nanoid} from 'nanoid'
export default {
    namespaced: true,
    actions: {
        addWang(context, value) {
            if(value.name.indexOf('王') === 0) {
                context.commit('ADD_PERSON', value)
            } else {
                alert('添加的人必须姓王')
            }
        },
        addPersonServer(context) {
            axios.get('https://api.example.com/person').then(
                response => {
                    context.commit('ADD_PERSON', { id: nanoid(), name: response.data} )
                })
                error => {
                    console.error('Error fetching person:', error)
                }
        }
    },
    mutations: {
        ADD_PERSON(state, personObj) {
            state.personList.unshift(personObj)
        }
    },
    state: {
        personList: [
            {id: '001', name: '张三'}
        ]
    },
    getters: {
        firstPersonName(state) {
            return state.personList[0].name
        }
    }
}
