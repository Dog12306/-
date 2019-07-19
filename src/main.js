import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index.js'
import '@/assets/style/reset.css'
import 'lib-flexible'
import 'vue-awesome/icons'
import Icon from 'vue-awesome/components/Icon'
import unloadevent from './assets/unload'

Vue.config.productionTip = false
Vue.component('v-icon', Icon)
new Vue({
  router,
  store,
  unloadevent,
  render: h => h(App)
}).$mount('#app')

console.log(process.env)
