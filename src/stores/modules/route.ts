import { ref } from 'vue'
import { defineStore } from 'pinia'
import type { RouteRecordRaw } from 'vue-router'
import { mapTree } from 'xe-utils'
import { cloneDeep } from 'lodash-es'
import { constantRoutes } from '@/router'
import { transformPathToName } from '@/utils'
import type { MenuItem } from '@/apis/system'
import { getUserRoutes } from '@/apis/user'
import ParentView from '@/components/ParentView/index.vue'

const Layout = () => import('@/layout/index.vue')

// 匹配views里面所有的.vue文件
const modules = import.meta.glob('@/views/**/*.vue')

/** 加载模块 */
export const loadView = (view: string) => {
  let res
  for (const path in modules) {
    const dir = path.split('views/')[1].split('.vue')[0]
    if (dir === view) {
      res = () => modules[path]()
    }
  }
  return res
}

/** 将component由字符串转成真正的模块 */
const transformComponentView = (component: string) => {
  if (component === 'Layout') {
    return Layout as never
  } else if (component === 'ParentView') {
    return ParentView as never
  } else {
    return loadView(component) as never
  }
}

/**
 * @description 前端来做排序、格式化
 * @params {menus} 后端返回的路由数据，已经根据当前用户角色过滤掉了没权限的路由
 * 1. 对后端返回的路由数据进行排序，格式化
 * 2. 同时将component由字符串转成真正的模块
 */
const formatAsyncRoutes = (menus: MenuItem[]) => {
  if (!menus.length) return []
  menus.sort((a, b) => (a?.sort ?? 0) - (b?.sort ?? 0)) // 排序
  const routes = mapTree(menus, (item) => {
    if (item.children && item.children.length) {
      item.children.sort((a, b) => (a?.sort ?? 0) - (b?.sort ?? 0)) // 排序
    }
    return {
      path: item.path,
      name: transformPathToName(item.path),
      component: item.component ? transformComponentView(item.component) : undefined,
      redirect: item.redirect,
      meta: {
        hidden: item.hidden,
        keepAlive: item.keepAlive,
        title: item.title,
        svgIcon: item.svgIcon,
        icon: item.icon,
        affix: item.affix,
        breadcrumb: item.breadcrumb,
        showInTabs: item.showInTabs,
        activeMenu: item.activeMenu,
        alwaysShow: item.alwaysShow
      }
    }
  })
  return routes as RouteRecordRaw[]
}

const storeSetup = () => {
  // 所有路由(常驻路由 + 动态路由)
  const routes = ref<RouteRecordRaw[]>([])
  // 动态路由(异步路由)
  const asyncRoutes = ref<RouteRecordRaw[]>([])

  // 合并路由
  const setRoutes = (data: RouteRecordRaw[]) => {
    routes.value = constantRoutes.concat(data)
    asyncRoutes.value = data
  }

  // 生成路由
  const generateRoutes = async (): Promise<RouteRecordRaw[]> => {
    try {
      // 向后端请求路由数据 这个接口已经根据用户角色过滤了没权限的路由(后端根据用户角色过滤路由显得比较安全些)
      const res = await getUserRoutes()
      const asyncRoutes = formatAsyncRoutes(res.data)
      setRoutes(asyncRoutes)
      const cloneRoutes = cloneDeep(asyncRoutes)
      return cloneRoutes
    } catch (error) {
      return []
    }
  }

  return {
    routes,
    asyncRoutes,
    generateRoutes
  }
}

export const useRouteStore = defineStore('route', storeSetup, { persist: true })
