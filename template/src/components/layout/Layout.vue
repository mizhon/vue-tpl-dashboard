<template>
  <div :class="wrapperStyle" class="app-wrapper">
    Layout
    <div
      v-if="device==='mobile'&&sidebar.opened"
      class="drawer-bg"
      @click="handleMobileSidebarClick"
    />
    <side-bar class="sidebar-container"/>
    <div class="main-container">
      <top-nav/>
      <main/>
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

<style rel="stylesheet/scss" lang="scss" scoped>
.app-wrapper {
  // @include clearfix;
  position: relative;
  height: 100%;
  width: 100%;
  &.mobile.openSidebar {
    position: fixed;
    top: 0;
  }
}
.drawer-bg {
  background: #000;
  opacity: 0.3;
  width: 100%;
  top: 0;
  height: 100%;
  position: absolute;
  z-index: 999;
}
</style>

