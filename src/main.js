import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import './globalComponents'

// import '../../scss-core/App.scss'
// import '../../codyhouse-framework/main/assets/css/style.scss'
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
