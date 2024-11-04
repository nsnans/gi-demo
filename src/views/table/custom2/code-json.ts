export default `
<template>
  <div class="table-page">
    <GiForm v-model="form" :options="options" :columns="QueryFormColumns" @search="search" @reset="search">
    </GiForm>

    <GiTable row-key="id" :loading="loading" :columns="columns" :data="tableData"
      :scroll="{ x: '100%', y: '100%', minWidth: 1300 }" :row-selection="{ type: 'checkbox', showCheckedAll: true }"
      :pagination="pagination" :disabled-column-keys="['序号', 'name']" @refresh="getTableData">
      <template #custom-title>
        <a-button type="primary" @click="onAdd">
          <template #icon><icon-plus /></template>
          <span>新增</span>
        </a-button>
        <a-button type="primary" status="danger" @click="onMulDelete">
          <template #icon><icon-delete /></template>
          <span>删除</span>
        </a-button>
        <a-button @click="onImport">
          <template #icon><icon-export /></template>
          <span>导入</span>
        </a-button>
        <a-button type="primary" status="warning" @click="onViewCode">
          <template #icon><icon-code /></template>
        </a-button>
      </template>
      <template #avatar="{ record }">
        <a-avatar :size="28" shape="circle">
          <img :src="record.avatar" />
        </a-avatar>
      </template>
      <template #gender="{ record }">
        <GiCellGender :gender="record.gender"></GiCellGender>
      </template>
      <template #status="{ record }">
        <GiCellStatus :status="record.status"></GiCellStatus>
      </template>
      <template #action>
        <a-space>
          <a-button type="primary" size="mini">修改</a-button>
          <a-button size="mini">详情</a-button>
          <a-popconfirm type="warning" content="您确定要删除该项吗?" @before-ok="onDelete">
            <a-button type="primary" status="danger" size="mini">删除</a-button>
          </a-popconfirm>
        </a-space>
      </template>
    </GiTable>

    <GiFooter></GiFooter>
  </div>
</template>

<script setup lang="ts">
import { Drawer, Link, Message, type PopconfirmInstance, type TableInstance } from '@arco-design/web-vue'
import CodeJson from './code-json'
import { useTable } from '@/hooks'
import { useDict } from '@/hooks/app'
import { type PersonItem, getPersonList } from '@/apis/person'
import type { Columns, Options } from '@/components/GiForm'
import GiCodeView from '@/components/GiCodeView/index.vue'

defineOptions({ name: 'TableCustom2' })
const { data: statusOptions } = useDict({ code: 'status' })
const form = reactive({})

const options: Options = reactive({
  form: { layout: 'inline' },
  grid: { cols: { xs: 1, sm: 2, md: 3, lg: 4, xl: 4, xxl: 4 } },
  btns: {},
  fold: { enable: true, index: 2, defaultCollapsed: true }
})

const QueryFormColumns = computed<Columns>(() => [
  {
    type: 'input',
    label: '姓名',
    field: 'name'
  },
  {
    type: 'input',
    label: '手机',
    field: 'phone',
    props: {
      maxLength: 11
    }
  },
  {
    type: 'select',
    label: '类型',
    field: 'status',
    options: statusOptions.value
  },
  {
    type: 'date-picker',
    label: '创建日期',
    field: 'createTime'
  },
  {
    type: 'input',
    label: '地址',
    field: 'address'
  }
])

const loading = ref(false)
const columns: TableInstance['columns'] = [
  { title: '序号', width: 66, align: 'center', render: ({ rowIndex }) => h('span', {}, rowIndex + 1) },
  {
    title: '姓名',
    dataIndex: 'name',
    width: 120,
    render: ({ record }) =>
      h(Link, { onClick: () => onClickName(record as PersonItem) }, { default: () => record.name })
  },
  { title: '头像', width: 80, align: 'center', slotName: 'avatar' },
  { title: '手机号', dataIndex: 'phone', width: 150 },
  { title: '性别', dataIndex: 'gender', width: 100, align: 'center', slotName: 'gender' },
  { title: '账户', dataIndex: 'account', width: 120 },
  { title: '状态', width: 100, slotName: 'status', align: 'center' },
  {
    title: '创建时间',
    dataIndex: 'createTime',
    ellipsis: true,
    tooltip: true,
    sortable: {
      sortDirections: ['ascend', 'descend']
    }
  },
  { title: '地址', dataIndex: 'address', ellipsis: true, tooltip: true },
  { title: '操作', width: 200, slotName: 'action', align: 'center' }
]

const { tableData, getTableData, pagination, search } = useTable((p) => getPersonList(p))

function onClickName(record: PersonItem) {
  Message.success(\`点击了\${ record.name } \`)
}

const onAdd = () => {
  Message.info('点击了新增')
}

const onMulDelete = () => {
  Message.error('点击了批量删除')
}

const onImport = () => {
  Message.warning('点击了导入')
}

const onDelete: PopconfirmInstance['onBeforeOk'] = () => {
  return new Promise((resolve) => setTimeout(() => resolve(true), 300))
}

// 查看代码
const onViewCode = () => {
  Drawer.open({
    title: '数据结构',
    content: () => h(GiCodeView, { codeJson: CodeJson, type: 'vue' }),
    width: '100%'
  })
}
</script>

<style lang="scss" scoped>
.table-page {
  height: 100%;
  overflow: hidden;
  margin: $margin;
  background: var(--color-bg-1);
  padding: $padding;
  padding-bottom: 0;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
}
</style>
`
