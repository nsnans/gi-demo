type ALinkStatus = 'normal' | 'success' | 'warning' | 'danger'
type AModalOnBeforeOk = (done: (closed: boolean) => void) => void | boolean
type ADrawerOnBeforeOk = (done: (closed: boolean) => void) => void | boolean
type ASelectChange = string | number | Record<string, any> | (string | number | Record<string, any>)[]
type ATableSelect =
  | ((rowKeys: BaseType[], rowKey: BaseType, record: import('@arco-design/web-vue').TableData) => any)
  | undefined
type ARadioGroupChange = (value: string | number | boolean, ev: Event) => void
type AUploadBeforeRemove = ((fileItem: import('@arco-design/web-vue').FileItem) => Promise<boolean>) | undefined
