import Vue from 'vue'
import App from './App.vue'
import DButton from './components/button.vue'
import Ddialog from './components/dialog.vue'
Vue.config.productionTip = false

Vue.component(DButton.name, DButton)
Vue.component(Ddialog.name, Ddialog)

new Vue({
  render: h => h(App)
}).$mount('#app')
