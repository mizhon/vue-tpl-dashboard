import axios from 'axios'
import store from '@/store'
import { getToken } from '@utils/auth'
import { MessageBox, Message } from 'element-ui'

// create an axios request instance
const service = axios.create({
  // 根据实际情况配置
  baseURL: process.env.BASE_URL,
  withCredentials: true, // 跨域请求时发送 cookies
  timeout: 5000 // request timeout
})

// request interceptor
service.interceptors.request.use(
  config => {
    if (store.getters.token) {
      // 让每个请求携带token-- ['X-Token']为自定义key 请根据实际情况自行修改
      config.headers['X-Token'] = getToken()
    }
    // console.log('[<<< Request.js config settings: >>>]', config)
    return config
  },
  err => {
    console.error(err)
    return Promise.reject(err)
  }
)

service.interceptors.response.use(
  response => {
    // console.log('Request.js response --->', response)
    const res = response.data
    if (res.code !== 20000) {
      Message({
        message: res.message,
        type: 'ERROR',
        duration: 3000
      })
      if (res.code === 50008 || res.code === 50012 || res.code === 50014) {
        MessageBox.confirm('服务端错误', '确认', {
          confirmButtonText: '重试',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          store.dispatch('user/resetToken').then(() => {
            // 重新实例化vue-router对象, 避免bug
            location.reload()
          })
        })
      }
      return Promise.reject(new Error('请求失败!'))
    } else {
      return res
    }
  },

  error => {
    console.error('Error: ' + error)
    Message({
      message: error.message,
      type: 'error',
      duration: 3000
    })

    return Promise.reject(error)
  }
)

export default service
