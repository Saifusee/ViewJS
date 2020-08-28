import Vue from 'vue'
import App from './App.vue'
import globalComponent from './globalComponent.vue'

Vue.component('global-app-server-status', globalComponent);

new Vue({
  el: '#app',
  render: h => h(App)
})
