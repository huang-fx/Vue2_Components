import Vue from 'vue'
import App from './App'
import store from './store'

Vue.config.productionTip = false
Vue.config.silent = true

new Vue({
  el: '#app',
  render: h => h(App),
  store,
  beforeCreate() {
    Vue.prototype.$bus = this
  }
})
