import { defineStore } from 'pinia'
import { ref } from 'vue'
import router from '@/router'
import type { RouteRecordRaw, RouteRecordName } from 'vue-router'

const storeSetup = () => {
  const tagList = ref<RouteRecordRaw[]>([]) // 保存页签tab的数组
  const cacheList = ref<RouteRecordName[]>([]) // keep-alive缓存的数组, 元素是组件名

  // 添加一个页签, 如果当前路由已经打开, 则不再重复添加
  const addTagItem = (route: RouteRecordRaw) => {
    const item = JSON.parse(JSON.stringify(route))
    if (tagList.value.some((i) => i.path === item.path)) return
    tagList.value.push(item)
  }
  // 删除一个页签
  const removeTagItem = (path: string) => {
    const index = tagList.value.findIndex((item) => item.path === path)
    if (index >= 0) {
      const isActive = router.currentRoute.value.path === tagList.value[index]['path']
      tagList.value.splice(index, 1)
      if (isActive) {
        router.push({ path: tagList.value[tagList.value.length - 1]['path'] })
      }
    }
  }
  // 清空页签
  const clearTagList = () => {
    tagList.value = []
    router.push('/')
  }
  // 添加缓存页
  const addCacheItem = (route: RouteRecordRaw) => {
    const item = JSON.parse(JSON.stringify(route))
    if (item.name) {
      if (cacheList.value.includes(item.name)) return
      if (item.meta?.keepAlive) {
        cacheList.value.push(item.name)
      }
    }
  }
  // 删除一个缓存页
  const removeCacheItem = (name: RouteRecordName) => {
    const index = cacheList.value.findIndex((item) => item === name)
    if (index >= 0) {
      cacheList.value.splice(index, 1)
    }
  }
  // 清空缓存页
  const clearCacheList = () => {
    cacheList.value = []
  }
  // 关闭当前
  const closeCurrent = (path: string) => {
    removeTagItem(path)
    const item = tagList.value.find((i) => i.path === path)
    if (item?.name) {
      removeCacheItem(item.name)
    }
  }
  // 关闭其他
  const closeOther = (path: string) => {
    const arr = tagList.value.filter((i) => i.path !== path)
    arr.forEach((item) => {
      removeTagItem(item.path)
      if (item?.name) {
        removeCacheItem(item.name)
      }
    })
  }
  // 关闭全部
  const closeAll = () => {
    clearTagList()
  }
  // 初始化
  const init = () => {
    clearTagList()
    clearCacheList()
  }

  return {
    tagList,
    cacheList,
    addTagItem,
    removeTagItem,
    clearTagList,
    addCacheItem,
    removeCacheItem,
    clearCacheList,
    closeCurrent,
    closeOther,
    closeAll,
    init
  }
}

export const useTabsStore = defineStore('tabs', storeSetup, { persist: false })
