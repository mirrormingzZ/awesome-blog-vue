import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import i18n from './lang'
import vuetify from '@/plugins/vuetify'

// import './mock'
import './lazy'
import '@/assets/styles/global.scss'
import '@/assets/styles/icon.css'

Vue.config.productionTip = false
new Vue({
  router,
  store,
  i18n,
  vuetify,
  render: h => h(App)
}).$mount('#app')
