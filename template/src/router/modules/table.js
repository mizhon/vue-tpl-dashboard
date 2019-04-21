import Layout from '@/layout'

const tableRoute = {
  path: '/demo/table',
  component: Layout,
  redirect: 'noredirect',
  alwaysShow: true,
  meta: {
    title: '表格',
    icon: 'iconfont icon-menu'
  },
  children: [
    {
      path: 'basic',
      component: () => import('@/views/table/basic'),
      name: 'BasicTable',
      meta: { title: '基本表格' }
    },
    {
      path: 'complex',
      component: () => import('@/views/table/complex'),
      name: 'ComplexTable',
      meta: { title: '复杂表格' }
    }
  ]
}

export default tableRoute
