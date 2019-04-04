import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@components/HelloWorld'
/* Layout */
import Layout from '@components/layout/Layout'

Vue.use(Router)

/**
* hidden: true                   if `hidden:true` will not show in the sidebar(default is false)
* alwaysShow: true               if set true, will always show the root menu, whatever its child routes length
*                                if not set alwaysShow, only more than one route under the children
*                                it will becomes nested mode, otherwise not show the root menu
* redirect: noredirect           if `redirect:noredirect` will no redirect in the breadcrumb
* name:'router-name'             the name is used by <keep-alive> (must set!!!)
* meta : {
    title: 'title'               the name show in subMenu and breadcrumb (recommend set)
    icon: 'svg-name'             the icon show in the sidebar
    breadcrumb: false            if false, the item will hidden in breadcrumb(default is true)
  }
**/
export const routerMap = [{
  path: '/login',
  component: () => import('@views/login'),
  hidden: true
}, {
  path: '/404',
  component: () => import('@views/errors/404'),
  hidden: true
}, {
  path: '/',
  name: 'Dashboard',
  component: Layout,
  redirect: '/dashboard',
  hidden: true,
  children: [{
    path: 'dashboard',
    component: () => import('@views/dashboard/index')
  }]
}]

export default new Router({
  // routes: [{
  //   path: '/',
  //   name: 'HelloWorld',
  //   component: HelloWorld
  // }]
  routes: routerMap
})
