import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/login/index.vue'),
    meta: { title: '登录', keepAlive: false }
  },
  {
    path: '/',
    redirect: '/home',
    name: 'Layout',
    component: () => import('@/layout/index.vue'),
    meta: { title: '首页', keepAlive: false },
    children: [
      {
        path: '/home',
        name: 'Home',
        component: () => import('@/views/home/index.vue'),
        meta: { title: '首页', keepAlive: false }
      },
      {
        path: '/indicator-manage',
        name: 'IndicatorManage',
        component: () => import('@/views/indicator-manage/main/index.vue'),
        meta: { title: '指标管理', keepAlive: false }
      },
      {
        path: '/indicator-manage/add',
        name: 'IndicatorManageAdd',
        component: () => import('@/views/indicator-manage/add/index.vue'),
        meta: { title: '指标管理-新增', keepAlive: false }
      },
      {
        path: '/indicator-manage/detail',
        name: 'IndicatorManageDetail',
        component: () => import('@/views/indicator-manage/detail/index.vue'),
        meta: { title: '指标管理-详情', keepAlive: false }
      },
      {
        path: '/file-manage',
        name: 'FileManage',
        component: () => import('@/views/file-manage/main/index.vue'),
        meta: { title: '文件管理', keepAlive: true }
      },
      {
        path: '/form-manage',
        name: 'FormManage',
        component: () => import('@/views/form-manage/index.vue'),
        meta: { title: '表单管理', keepAlive: false }
      },
      {
        path: '/system-manage',
        name: 'SystemManage',
        component: () => import('@/views/system-manage/index.vue'),
        meta: { title: '系统管理', keepAlive: false }
      },
      {
        path: '/system-manage/dept-manage',
        name: 'SystemManageDeptManage',
        component: () => import('@/views/system-manage/dept-manage/index.vue'),
        meta: { title: '部门管理', keepAlive: false }
      },
      {
        path: '/system-manage/user-manage',
        name: 'SystemManageUserManage',
        component: () => import('@/views/system-manage/user-manage/index.vue'),
        meta: { title: '用户管理', keepAlive: false }
      },
      {
        path: '/system-manage/role-manage',
        name: 'SystemManageRoleManage',
        component: () => import('@/views/system-manage/role-manage/index.vue'),
        meta: { title: '角色管理', keepAlive: false }
      },
      {
        path: '/system-manage/menu-manage',
        name: 'SystemManageMenuManage',
        component: () => import('@/views/system-manage/menu-manage/index.vue'),
        meta: { title: '菜单管理', keepAlive: false }
      },
      {
        path: '/error-page/:id',
        name: 'ErrorPage',
        component: () => import('@/views/error-page/index.vue'),
        meta: { title: '异常页', keepAlive: false }
      },
      {
        path: '/test',
        name: 'Test',
        component: () => import('@/views/test/index.vue'),
        meta: { title: '测试页', keepAlive: true }
      }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior: () => ({ left: 0, top: 0 })
})

// router.beforeEach((to, from, next) => {
//   // 设置侧边菜单栏的高亮路径
//   const arr = app.menuList.map((i) => i.path)
//   if (arr.includes(to.path)) {
//     app.setActivePath(to.path)
//   }
//   next()
// })

export default router
