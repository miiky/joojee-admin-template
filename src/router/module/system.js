import Main from '@/components/main'
import parentView from '@/components/parent-view'

export default {
  path: '/system',
  name: '_system',
  meta: {
    icon: 'md-menu',
    title: '系统管理'
  },
  component: Main,
  children: [{
    path: '/user',
    name: '_user',
    meta: {
      icon: 'md-funnel',
      title: '用户管理'
    },
    component: () => import('@/view/system/user/index.vue')
  }, {
    path: '/role',
    name: '_role',
    meta: {
      access: ['super_admin'],
      icon: 'md-funnel',
      // showAlways: true,
      title: '角色管理'
    },
    component: parentView,
    children: [{
      path: '/role1',
      name: '_role1',
      meta: {
        icon: 'md-funnel',
        title: '角色管理'
      },
      component: () => import('@/view/system/role/index.vue')
    }, {
      path: '/role2',
      name: '_role2',
      meta: {
        icon: 'md-funnel',
        title: '角色权限分配'
      },
      component: () => import('@/view/system/role/index.vue')
    }]
  }]
}
