'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  // 设置为开发环境的后台API地址
  BASE_URL: '"/dev-api"'
})
