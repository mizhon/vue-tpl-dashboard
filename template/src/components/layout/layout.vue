<template>
  <div class ="layout-wrapper">
    <top-nav></top-nav>
    <div>
      <side-bar></side-bar>
      <router-view class="view"></router-view>
    </div>
  </div>
</template>

<script>
import { TopNav, SideBar, Main } from './frame'

const LAYOUT_COMPONENT = 'Layout'
export default {
  name: LAYOUT_COMPONENT,
  components: {
    TopNav,
    SideBar,
    Main
  },
  computed: {
    sidebar() {
      console.log(this.$store)
      return this.$store.state.app.sidebar
    },
    device() {
      return this.$store.state.app.device
    },
    wrapperStyle() {
      return {
        hideSidebar: !this.sidebar.opened,
        openSidebar: this.sidebar.opened,
        withoutAnimation: this.sidebar.withoutAnimation,
        mobile: this.device === 'mobile'
      }
    }
  },
  methods: {
    // 在移动端显示时处理Sidebar展示
    handleMobileSidebarClick() {
      this.$store.dispatch('CloseSideBar', { withoutAnimation: false })
    }
  }
}
</script>

<style rel="stylesheet/less" lang="less" scoped>
.layout-wrapper {
}
</style>

