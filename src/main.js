// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import router from './router'

import 'normalize.css/normalize.css'
import App from './App'

import {
  Button,
  CellGroup,
  Col,
  Field,
  Icon,
  Row
} from 'vant'

Vue.component(Button.name, Button)
Vue.component(CellGroup.name, CellGroup)
Vue.component(Col.name, Col)
Vue.component(Field.name, Field)
Vue.component(Icon.name, Icon)
Vue.component(Row.name, Row)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
