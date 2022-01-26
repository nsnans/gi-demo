import { createApp } from 'vue'
import FileContextMenu from './index.vue'
import ArcoVueIcon from '@arco-design/web-vue/es/icon'
import ArcoVue from '@arco-design/web-vue'

let instance = null
let dom = null

function contextMenu(e, fileInfo) {
  return new Promise((resolve, reject) => {
    if (instance !== null) {
      instance.unmount()
    }
    if (dom !== null) {
      document.body.removeChild(dom)
    }
    // 创建一个挂载容器
    dom = document.createElement('div')
    // 挂载组件
    document.body.appendChild(dom)
    // 实例化组件, createApp第二个参数是 props
    instance = createApp(FileContextMenu, {
      axis: { x: e.clientX, y: e.clientY },
      fileInfo: fileInfo,
      onClick: (mode) => {
        resolve({ mode: mode, fileInfo: fileInfo })
        unmount()
        instance = null
        dom = null
      },
      onCancel: () => {
        resolve('error')
        unmount()
        instance = null
        dom = null 
      }
    })
      .use(ArcoVue)
      .use(ArcoVueIcon)

    // 卸载组件
    function unmount() {
      if (instance !== null) {
        instance.unmount()
      }
      if (dom !== null) {
        document.body.removeChild(dom)
      }
    }
    instance.mount(dom)
  })
}

export default contextMenu
