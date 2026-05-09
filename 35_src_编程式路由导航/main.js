import Vue from 'vue'
import App from './App'
// 这里是为了Vue.use(VueRouter)而引用的
import VueRouter from 'vue-router'
// 这里是为了配置项中的router引用的
import router from './router'

Vue.config.productionTip = false
Vue.config.silent = true
// 这里一定要使用VueRouter
Vue.use(VueRouter) 

new Vue({
  el: '#app',
  render: h => h(App),
  router
})
