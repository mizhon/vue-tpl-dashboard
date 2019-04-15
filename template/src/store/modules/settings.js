// import variables from '@assets/styles/element-variables.scss'
import settings from '@/settings'

// const { showSettings, tagsView, fixedHeader, sidebarLogo } = defaultSettings

const state = {
  // theme: variables.theme,
  showSettings: settings.showSettings,
  tagsView: settings.tagsView,
  fixedHeader: settings.fixedHeader,
  sidebarLogo: settings.sidebarLogo
}

const mutations = {
  CHANGE_SETTING: (state, { key, value }) => {
    if (state.hasOwnProperty(key)) {
      state[key] = value
    }
  }
}

const actions = {
  changeSetting({ commit }, data) {
    commit('CHANGE_SETTING', data)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
