import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false
Vue.config.keyCodes.a_button = 65;

new Vue({
  render: function (h) { return h(App) },
}).$mount('#app')
