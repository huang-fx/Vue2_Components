import Vue from 'vue'
import App from './App'
import { mixin } from './mixin'

Vue.config.productionTip = false
Vue.mixin(mixin)

new Vue({
  el: '#app',
  render: h => h(App)
})