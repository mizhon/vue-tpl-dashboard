import Vue from 'vue'
import Vuex from 'vuex'
import app from './modules/app'
import user from './modules/user'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    app,
    user
  },
  getters: {
    sidebar: state => state.app.sidebar,
    device: state => state.app.device,
    token: state => state.user.token,
    avatar: state => state.user.avatar,
    name: state => state.user.name,
    roles: state => state.user.roles
  }
})

console.log('store 中包含的对象.....', store)
export default store
