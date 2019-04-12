'use strict'
const merge = require('webpack-merge')
const devEnv = require('./dev.env')

module.exports = merge(devEnv, {
  NODE_ENV: '"testing"',
  // 设置为测试环境的后台API地址
  BASE_URL: '"/test-api"'
})
