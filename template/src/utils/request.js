import axios from 'axios'
import store from '@/store'
import { getToken } from '@utils/auth'
import { MessageBox, Message } from 'element-ui'

// create an axios request instance
const request = axios.create({
  // 根据实际情况配置
  baseURL: process.env.baseURL,
  withCredentials: true, // 跨域请求时发送 cookies
  timeout: 5000 // request timeout
})

// request interceptor
service.interceptors.request.use(
  config => {
    if(store.getters.token) {
      // 让每个请求携带token-- ['X-Token']为自定义key 请根据实际情况自行修改
      config.headers['X-Token'] = getToken()
    }
    return config
  },
  err => {
    console.error(err)
    return Promise.reject(err)
  }
)

service.interceptors.request.use(
  res => {
    const res = res.data
    if(res.code !== 200) {
      Message({
        message: res.message,
        type: 'ERROR',
        duration: 3000
      })
      if(res.code > 500) {
        MessageBox.confirm('服务端错误', '确认', {
          confirmButtonText: '重试',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          store.dispatch('user/resetToken').then(() => {
            location.reload()
          })
        })
      }
      return Promise.reject(new Error('请求失败!'))
    } else {
      return res
    }
  },

  err => {
    console.error('Error: ' + err)
    Message({
      message: error.message,
      type: 'error',
      duration: 3000
    })

    return Promise.reject(err)
  }
)
