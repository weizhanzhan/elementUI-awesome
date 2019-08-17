import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { Button, Tabs, TabPane, Row, Col } from 'element-ui'

const components = [Button, Tabs, TabPane, Row, Col]
Vue.config.productionTip = false
components.forEach(component => {
  Vue.use(component)
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
