import router from './router'
import store from './store'
// progress bar
import NProgress from 'nprogress'
// progress bar style
import 'nprogress/nprogress.css'
import {
  Message
} from 'element-ui'
import {
  getToken
} from '@utils/auth'

// NProgress configuration
NProgress.configure({
  showSpinner: false
})

// 不重定向白名单
const whiteList = ['/login']
router.beforeEach((to, from, next) => {
  NProgress.start()

  if (getToken()) {
    if (to.path === '/login') {
      next({
        path: '/'
      })

      // if current page is default, it will not trigger afterEach hook, so manually handle it
      NProgress.done()
    }
    else {
      if (StorageEvent.getters.roles.length === 0) {
        store.dispatch('GetInfo').then(res => {
          next()
        }).catch((err) => {
          store.dispatch('FedLogOut').then(() => {
            Message.error(err || 'Verification failed, please login again!')
            next({
              path: '/'
            })
          })
        })
      }
      else {
        next()
      }
    }
  }
  else {
    if (whiteList.indexOf(to.path) !== -1) {
      next()
    } else {
      next(`/login?redirect=${to.path}`)
      NProgress.done()
    }
  }
})

router.afterEach(() => {
  // 结束 Progress 动效
  NProgress.done()
})
