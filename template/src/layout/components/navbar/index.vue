<template>
  <div class="navbar">
    <!-- 侧边栏伸缩按钮 -->
    <hamburger id="hamburger-container" :is-active="sidebar.opened" class="hamburger-container" @toggleClick="toggleSideBar"></hamburger>
    <!-- 面包屑 -->
    <breadcrumb id="breadcrumb-container" class="breadcrumb-container"></breadcrumb>
    <!-- 顶部导航栏右侧菜单 -->
    <div class="right-menu">
      <template v-if="device !== 'mobile'">
        <!-- 搜索栏 -->
        <search id="header-search" class="right-menu-item"></search>
        <!-- 全屏设置 -->
        <screen-full id="screenfull" class="right-menu-item hover-effect"></screen-full>
      </template>

      <el-dropdown class="avatar-container right-menu-item hover-effect" trigger="click">
        <div class="avatar-wrapper">
          <div class="user-name">\{{ name }}</div>
          <img :src="avatar" class="user-avatar">
          <i class="el-icon-caret-bottom" />
        </div>
        <el-dropdown-menu slot="dropdown">
          <router-link to="/">
            <el-dropdown-item>
              \{{ page }}
            </el-dropdown-item>
          </router-link>
          <el-dropdown-item divided>
            <span style="display:block;" @click="logout">
              \{{ signOff }}
            </span>
          </el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Hamburger from './hamburger'
import Breadcrumb from './breadcrumb'
import Search from './search'
import ScreenFull from './screenfull'

export default {
  components: {
    Hamburger,
    Breadcrumb,
    Search,
    ScreenFull
  },
  data() {
    return {
      page: '首页',
      signOff: '退出登录'
    }
  },
  computed: {
    ...mapGetters([
      'sidebar',
      'name',
      'avatar',
      'device'
    ])
  },
  methods: {
    toggleSideBar() {
      this.$store.dispatch('app/toggleSideBar')
    },
    async logout() {
      await this.$store.dispatch('user/logout')
      this.$router.push(`/login?redirect=${this.$route.fullPath}`)
    }
  }
}
</script>

<style lang="scss" scoped>
.navbar {
  height: 50px;
  overflow: hidden;
  position: relative;
  background: #fff;
  box-shadow: 0 1px 4px rgba(0,21, 41, .08);

  .hamburger-container {
    line-height: 46px;
    height: 100%;
    float: left;
    cursor: pointer;
    transition: background .3s;
    -webkit-tap-highlight-color:transparent;

    &:hover {
      background: rgba(0, 0, 0, .025);
    }
  }

  .breadcrumb-container {
    float: left;
  }

  .right-menu {
    float: right;
    height: 100%;
    line-height: 40px;

    &:focus {
      outline: none;
    }

    .right-menu-item {
      display: inline-block;
      padding: 0 8px;
      height: 100%;
      font-size: 18px;
      color: #5a5e66;
      vertical-align: text-bottom;

      &.hover-effect {
        cursor: pointer;
        transition: background .3s;

        &:hover {
          background: rgba(0, 0, 0, .025)
        }
      }
    }

    .avatar-container {
      margin-right: 30px;

      .avatar-wrapper {
        position: relative;
        margin-top: 5px;

        .user-name {
          // display: inline-block;
          float: left;
          line-height: 40px;
          font-size: 14px;
          vertical-align: middle;
          margin-right: 10px;
        }
        .user-avatar {
          cursor: pointer;
          width: 32px;
          height: 32px;
        }

        .el-icon-caret-bottom {
          cursor: pointer;
          position: absolute;
          right: -20px;
          top: 15px;
          font-size: 12px;
        }
      }
    }
  }
}
</style>
