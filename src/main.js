import Vue from 'vue'
import App from './App.vue'

import router from './router'
import Vuetify from 'vuetify' 
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue)

Vue.use(Vuetify)


Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')