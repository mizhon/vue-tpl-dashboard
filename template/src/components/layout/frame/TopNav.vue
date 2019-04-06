<template>
  <header class="dk-header">
    <div class="nav-logo">
      <img :src="logoPath" width="30">
      <span class="nav-toggler-icon"><i class="iconfont icon-menu"></i></span>
    </div>
    <div class="nav-container">
      <!-- 右侧头像，logout 按钮 -->
      <ul>
        <li></li>
      </ul>
    </div>
  </header>
</template>

<script>
const COMPONENT_NAME = 'dk-header'

export default {
  name: COMPONENT_NAME,
  data() {
    return {
      logoPath: '../../../assets/imgs/logo.png'
    };
  },
  methods: {

  }
}
</script>

<style lang="less">
.dk-header {
  position: fixed;
  width: 100%;
  height: 35px;
  background-color: #24292e;
  box-shadow: 0 4px 30px 0 rgba(223, 225, 230, 0.8);
  overflow-x: hidden;
  .nav-logo {
    img {
      vertical-align: middle;
      padding: 5px 15px;
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
  }
}
</style>


