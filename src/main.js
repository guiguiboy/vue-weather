import Vue from 'vue'
import App from './App.vue'
import store from './store'
import weatherApi from './services/WeatherApi.js'

Vue.config.productionTip = false

new Vue({
  store,
    weatherApi,
  render: h => h(App)
}).$mount('#app')
