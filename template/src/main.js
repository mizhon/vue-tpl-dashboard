// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

import Vue from 'vue'
import Cookies from 'js-cookie'
import Element from 'element-ui'

import App from './App'
import router from './router'
import store from './store'

// 权限控制
import './permission'
// mock数据
import { mockXHR } from '../mock'
// NOTE: 在 development 环境中使用 mock API
if (process.env.NODE_ENV === 'development') {
  console.log('Current Environment: ', process.env.NODE_ENV)
  mockXHR()
}

Vue.use(Element, {
  // 设置 Element-UI的字体为 mini
  size: Cookies.get('size') || 'mini'
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  // i18n,
  components: {
    App
  },
  template: '<App/>'
})
