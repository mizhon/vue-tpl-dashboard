<template>
  <header class="dk-header">
    <div class="navbar-logo">
      <!-- <img src="../../../assets/imgs/icon.svg"> -->
      <img src="../../../assets/imgs/logo.png" width="30"/>
      <span class="nav-toggler-icon"><i class="iconfont icon-menu">123</i></span>
    </div>
    <div class="navbar-items">
      <!-- 右侧头像，logout 按钮 -->
      <div class="user-avatar">
        <img src="../../../assets/imgs/female-avatar.svg" width="30"/>
      </div>
      <div class="logout">
        <span>Logout</span>
      </div>
    </div>
  </header>
</template>

<script>
const COMPONENT_NAME = 'dk-header'

export default {
  name: COMPONENT_NAME,
  data() {
    return {};
  },
  methods: {}
}
</script>

<style lang="less">
.dk-header {
  position: fixed;
  width: 100%;
  height: 60px;
  background-color: #fff; // #24292e;
  box-shadow: 0 2px 20px 0 rgba(223, 225, 230, 0.8);
  overflow-x: hidden;
  z-index: 999;
  .navbar-logo {
    float: left;
    height: 60px;
    img {
      padding: 15px 26px;
    }
    .nav-toggler-icon {
      display: block;

    }
  }
  .navbar-items {
    float: right;
    height: 60px;
    text-align: center;
    .user-avatar {
      display: inline-block;
      padding: 14px 26px;
      vertical-align:middle;
    }
    .logout {
      display: inline-block;
      // color: #fff;
      line-height: 60px;
      vertical-align: middle;
      padding-right: 30px;
    }
  }
}
</style>
