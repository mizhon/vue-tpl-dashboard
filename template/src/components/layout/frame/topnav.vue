<template>
  <header class="dk-header">
    <div class="nav-logo">
      <img src="../../../assets/imgs/logo.png" width="30">
      <span class="nav-toggler-icon"><i class="iconfont icon-menu"></i></span>
    </div>
    <div class="nav-container">
      <!-- 右侧头像，logout 按钮 -->
      <div class="user-avatar">
        <img src="../../../assets/imgs/logo.png"/>
      </div>
      <div class="nav-logout">
        <span>Logout</span>
        <i class="iconfont icon-arrow-down-bold"></i>
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
  height: 50px;
  background-color: #fff; //#24292e;
  box-shadow: 0 2px 20px 0 rgba(223, 225, 230, 0.8);
  overflow-x: hidden;
  .nav-logo {
    img {
      vertical-align: middle;
      padding: 10px 10px 10px 20px;
    }
    .nav-toggler-icon {
      display: inline-block;
      vertical-align: middle;
    }
  }
  .nav-container {
    display: flex;
    flex-direction: row;
    align-items: cneter;
    padding-right: 30px;
    .nav-avatar {
      width: 30px;
      border-radius: 50%;
    }

  }
}
</style>
