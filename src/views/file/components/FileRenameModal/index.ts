import { h, ref } from 'vue'
import { Message, Modal } from '@arco-design/web-vue'
import ModalContent from './ModalContent.vue'
import type { FileItem } from '@/apis/file'

export function openFileRenameModal(fileItem: FileItem) {
  const ModalContentRef = ref<InstanceType<typeof ModalContent>>()

  return Modal.open({
    title: '重命名',
    width: '90%',
    modalStyle: { maxWidth: '450px' },
    modalAnimationName: 'el-fade',
    content: () =>
      h(ModalContent, {
        ref: (e) => {
          ModalContentRef.value = e as any
          ModalContentRef.value?.setForm({ id: fileItem.id, name: fileItem.name })
        }
      }),
    onBeforeOk: async () => {
      const valid = await ModalContentRef.value?.formRef?.validate()
      if (valid) return false
      await new Promise((resolve) => setTimeout(() => resolve(true), 300))
      Message.success('重命名成功')
      return true
    }
  })
}
