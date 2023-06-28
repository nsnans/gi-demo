import { reactive } from 'vue'
import { Modal, Form, type FormInstance } from '@arco-design/web-vue'
import * as Regexp from '@/utils/regexp'

export const openAddUserModal = () => {
  const form = reactive({
    name: '',
    phone: ''
  })

  const FormRef = ref<FormInstance | null>(null)

  const rules = {
    name: [
      { required: true, message: '请输入姓名' },
      { match: Regexp.OnlyCh, message: '只能是中文姓名' },
      { minLength: 1, maxLength: 4, message: '名字最长不超过4个字符' }
    ],
    phone: [
      { required: true, message: '请输入手机号' },
      { match: Regexp.Phone, message: '手机号格式不正确' }
    ]
  }

  const saveUserApi = () => {
    return new Promise((resolve) =>
      setTimeout(() => {
        resolve(true)
      }, 2000)
    )
  }

  Modal.open({
    title: '添加用户',
    content: () => (
      <Form model={form} ref={FormRef}>
        <Form.Item field="name" label="用户名" rules={rules.name}>
          <a-input v-model={form.name} placeholder="请输入用户名" max-length={8} allow-clear />
        </Form.Item>
        <Form.Item field="phone" label="手机号" rules={rules.phone}>
          <a-input v-model={form.phone} placeholder="请输入手机号" max-length={11} allow-clear />
        </Form.Item>
      </Form>
    ),
    okText: '添加',
    onBeforeOk: async () => {
      const flag = await FormRef.value?.validate()
      if (flag) return false
      await saveUserApi()
      return true
    }
  })
}