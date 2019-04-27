import Cookies from 'js-cookie'

const TOKEN_KEY = 'token'

export function getUser() {
  let user = localStorage.getItem('USER')
  if (user) {
    return JSON.parse(user)
  } else {
    return null
  }
}

export function setUser(user) {
  console.log('[@utils/auth.js] --- 保存用户信息: ', user)
  localStorage.setItem('USER', JSON.stringify(user))
}

export function getToken() {
  const token = Cookies.get(TOKEN_KEY)
  console.log('[util/auth.js] --- 获取token: ', token)
  if (token !== '' || token !== undefined || token !== null) {
    return token
  } else {
    return null
  }
}

export function setToken(token) {
  console.log('[utils/auth.js] ---> ', token)
  return Cookies.set(TOKEN_KEY, token, {
    expires: 1
  })
}

export function removeToken() {
  return Cookies.remove(TOKEN_KEY)
}

export function removeUser() {
  return Cookies.remove(TOKEN_KEY)
}
