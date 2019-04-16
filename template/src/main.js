// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Cookies from 'js-cookie'
import Element from 'element-ui'

import '@assets/styles/element-variables.scss'
// A modern alternative to CSS resets
import 'normalize.css/normalize.css'
// 应用全局样式
import '@assets/styles/index.scss'

import App from './App'
import router from './router'
import store from './store'
// 引入 icons
import './icons'
// 权限控制
import './permission'
// mock数据
import { mockXHR } from '../mock'
// NOTE: 在 development 环境中使用 mock API
if (process.env.NODE_ENV === 'development') {
  console.log('Current Environment: ', process.env.NODE_ENV)
  mockXHR()
}

// 设置 Element-UI的字体为 mini
Vue.use(Element, {
  size: Cookies.get('size') || 'mini'
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: {
    App
  },
  template: '<App/>'
})
