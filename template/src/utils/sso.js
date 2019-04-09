import config from '../../config/index'
// 需配置clientId
const clinetId
const ssoURL = process.env.NODE_ENV === 'testing' ?
  config.dev.ssoURL:
  config.prod.ssoURL

export const randomString = len => {
  let rt = ''
  let arr = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9',
    'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',
    'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'
  ]

  for (let i = 0; i < len; i++) {
    let pos = Math.floor(Math.random() * arr.length)
    rt += arr[pos]
  }
  return rt
}

export const getSSOLgoinURL = (to = null) => {
  return ssoURL + 'staff/login?' + [
    'state=' + randomString(32),
    'client_id' + clinetId,
    'redirect_url=' + encodeURIComponent(location.origin + '/login' + (to ? '?redirect=' + to.fullPath : ''))
  ].join('&')
}

export const redirectToSSO = (to = null) => {
  location.href = getSSOLgoinURL(to)
}
