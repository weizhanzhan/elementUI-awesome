import Vue from 'vue'
import App from './App.vue'
import router from './router'
import {
  Button,
  Tabs,
  TabPane,
  Row,
  Col,
  Form,
  FormItem,
  Input,
  InputNumber,
  Radio,
  RadioGroup,
  RadioButton,
  Checkbox,
  CheckboxButton,
  CheckboxGroup,
  Switch,
  Select,
  Option,
  OptionGroup,
  Slider
} from 'element-ui'

const components = [
  Button,
  Tabs,
  TabPane,
  Row,
  Col,
  Form,
  FormItem,
  Input,
  InputNumber,
  Radio,
  RadioGroup,
  RadioButton,
  Checkbox,
  CheckboxButton,
  CheckboxGroup,
  Switch,
  Select,
  Option,
  OptionGroup,
  Slider
]
Vue.config.productionTip = false
components.forEach(component => {
  Vue.use(component)
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
