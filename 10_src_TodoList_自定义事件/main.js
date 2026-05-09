import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false
Vue.config.silent = true

new Vue({
  el: '#app',
  render: h => h(App)
})