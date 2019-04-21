import Layout from '@/layout'

const iconsRoute = {
  path: '/demo',
  component: Layout,
  children: [{
    path: 'icons',
    component: () => import('@/views/icons/index'),
    name: 'Icons',
    meta: {
      title: '图标',
      icon: 'iconfont icon-more',
      noCache: true
    }
  }]
}

export default iconsRoute
