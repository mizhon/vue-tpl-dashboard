<template>
  <div class="icon-container">
    <h3>\{{ title }}</h3>
    <div class="icon-useage-desc">
      <el-alert
        :title="usage.summary"
        show-icon
        type="success"
        :closable="false"
        :description="usage.desc">
      </el-alert>
    </div>

    <ul>
      <li v-for="(item, idx) in iconList" :key="idx" class="icon-list">
        <div class="icon-content">
          <i :class="item.iconClass"></i>
        </div>
        <div class="icon-desc">
          <span>\{{ item.name }}</span>
        </div>
        <div class="icon-name">
          <span>\{{ item.iconClass }}</span>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>

export default {
  data() {
    return {
      title: '图标集合',
      usage: {
        summary: 'iconfont 的使用',
        desc: `挑选相应图标并查看图标对应的类名，并应用于页面即可，注意：类名中必须添加 "iconfont"类，例如： <i class="iconfont icon-wechat"></i>`
      },
      iconList: [
        {
          name: '微信',
          iconClass: 'iconfont icon-wechat'
        },
        {
          name: '支付宝',
          iconClass: 'iconfont icon-alipay'
        },
        {
          name: '保存',
          iconClass: 'iconfont icon-save'
        },
        {
          name: '扫码',
          iconClass: 'iconfont icon-scan'
        },
        {
          name: '二维码',
          iconClass: 'iconfont icon-qrcode'
        },
        {
          name: '照相机',
          iconClass: 'iconfont icon-camera'
        },
        {
          name: '搜索',
          iconClass: 'iconfont icon-search'
        },
        {
          name: '分享',
          iconClass: 'iconfont icon-share'
        },
        {
          name: '删除',
          iconClass: 'iconfont icon-trash'
        },
        {
          name: '消息',
          iconClass: 'iconfont icon-message'
        },
        {
          name: '首页',
          iconClass: 'iconfont icon-homepage'
        },
        {
          name: '仪表盘',
          iconClass: 'iconfont icon-dashboard'
        },
        {
          name: '通知',
          iconClass: 'iconfont icon-notify'
        },
        {
          name: '编辑',
          iconClass: 'iconfont icon-edit'
        },
        {
          name: 'PDF',
          iconClass: 'iconfont icon-pdf'
        },
        {
          name: '权限',
          iconClass: 'iconfont icon-access'
        },
        {
          name: '工具',
          iconClass: 'iconfont icon-tools'
        },
        {
          name: '设置',
          iconClass: 'iconfont icon-setting'
        },
        {
          name: '柱状图',
          iconClass: 'iconfont icon-stick-chart'
        },
        {
          name: '折线图',
          iconClass: 'iconfont icon-line-chart'
        },
        {
          name: '转发',
          iconClass: 'iconfont icon-forward'
        },
        {
          name: '用户',
          iconClass: 'iconfont icon-user'
        },
        {
          name: '循环',
          iconClass: 'iconfont icon-recycle'
        },
        {
          name: '更多',
          iconClass: 'iconfont icon-more'
        },
        {
          name: '图片',
          iconClass: 'iconfont icon-photo'
        },
        {
          name: '手机',
          iconClass: 'iconfont icon-phone'
        },
        {
          name: '运输',
          iconClass: 'iconfont icon-transport'
        },
        {
          name: '全屏',
          iconClass: 'iconfont icon-fullscreen'
        },
        {
          name: '收缩',
          iconClass: 'iconfont icon-narrow'
        },
        {
          name: '菜单',
          iconClass: 'iconfont icon-menu'
        },
        {
          name: '眼睛 - 闭',
          iconClass: 'iconfont icon-eye-close'
        },
        {
          name: '眼睛 - 睁',
          iconClass: 'iconfont icon-eye-open'
        },
        {
          name: '加',
          iconClass: 'iconfont icon-plus'
        },
        {
          name: '减',
          iconClass: 'iconfont icon-minus'
        },
        {
          name: '勾',
          iconClass: 'iconfont icon-check'
        },
        {
          name: '叉',
          iconClass: 'iconfont icon-close'
        },
        {
          name: '时钟 - 实心',
          iconClass: 'iconfont icon-clock'
        },
        {
          name: '时钟',
          iconClass: 'iconfont icon-clock-o'
        },
        {
          name: '星 - 实心',
          iconClass: 'iconfont icon-star'
        },
        {
          name: '星',
          iconClass: 'iconfont icon-star-o'
        },
        {
          name: '邮件 - 实心',
          iconClass: 'iconfont icon-email'
        },
        {
          name: '邮件',
          iconClass: 'iconfont icon-email-o'
        },
        {
          name: '位置 - 实心',
          iconClass: 'iconfont icon-location'
        },
        {
          name: '位置',
          iconClass: 'iconfont icon-location-o'
        },
        {
          name: '关闭 - 实心',
          iconClass: 'iconfont icon-cycle-close'
        },
        {
          name: '关闭',
          iconClass: 'iconfont icon-cycle-close-o'
        },
        {
          name: '勾选 - 实心',
          iconClass: 'iconfont icon-cycle-check'
        },
        {
          name: '勾选',
          iconClass: 'iconfont icon-cycle-check-o'
        },
        {
          name: '帮助 - 实心',
          iconClass: 'iconfont icon-help'
        },
        {
          name: '帮助',
          iconClass: 'iconfont icon-help-o'
        },
        {
          name: '电话 - 实心',
          iconClass: 'iconfont icon-tel'
        },
        {
          name: '电话',
          iconClass: 'iconfont icon-tel-o'
        },
        {
          name: '赞 - 实心',
          iconClass: 'iconfont icon-thumbup'
        },
        {
          name: '赞',
          iconClass: 'iconfont icon-thumbup-o'
        }
      ]
    }
  }
}
</script>
<style lang="scss" scoped>
.icon-container {
  overflow: hidden;
  margin: 10px;
  h3 {
    padding: 0 10px;
  }
  .icon-list {
    float: left;
    margin: 10px;
    padding: 10px;
    border: 1px dashed #ccc;
    border-radius: 6px;
    width: 150px;
    height: 120px;
    .icon-content {
      text-align: center;
      i {
        font-size: 35px;
      }
    }
    .icon-name, .icon-desc {
      text-align: center;
      font-size: 12px;
      color: #333;
      margin-top: 10px;
      span {
        padding: 4px 8px;
      }
    }
  }
  .icon-useage-desc {
    padding: 0 10px 10px 10px;
  }
}
.icon-list:hover {
  cursor: pointer;
  border: 1px dashed #42b983;
  .icon-content,
  .icon-name,
    .icon-desc  {
    color: #42b983;
  }
}
</style>
