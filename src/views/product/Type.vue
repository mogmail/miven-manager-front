<template>
  <page-header-wrapper content>
    <a-row :gutter="24">
      <a-col :span="4">
        <a-card :body-style="{padding: '24px 32px 24px 0'}" :bordered="true">
          <a-tree
            :tree-data="treeData"
            show-icon
            default-expand-all
            :default-selected-keys="['0-0']"
            @select="onSelect"
          >
            <a-icon slot="icon" type="carry-out" style="margin-right: 10px" />
          </a-tree>
        </a-card>
      </a-col>
      <a-col :span="20">
        <a-card :body-style="{padding: '24px 32px'}" :bordered="true">
          <a-form @submit="handleSubmit" :form="form">
            <a-form-item
              label="板块名称"
              :labelCol="{lg: {span: 7}, sm: {span: 7}}"
              :wrapperCol="{lg: {span: 10}, sm: {span: 17} }"
            >
              <a-input
                v-decorator="[
              'name',
              {rules: [{ required: true, message: '请输入板块名称' }]}
            ]"
                name="name"
                placeholder="请输入板块名称"
              />
            </a-form-item>
            <a-form-item
              label="类型"
              :labelCol="{lg: {span: 7}, sm: {span: 7}}"
              :wrapperCol="{lg: {span: 10}, sm: {span: 17} }"
            >
              <a-select
                placeholder="请选择类型"
                v-decorator="[
              'type',
              {rules: [{ required: true, message: '请选择类型' }]}
            ]"
              >
                <a-select-option value="1">板块种类一</a-select-option>
                <a-select-option value="2">板块种类二</a-select-option>
                <a-select-option value="3">板块种类三</a-select-option>
              </a-select>
            </a-form-item>
            <a-form-item
              label="排序优先值"
              :labelCol="{lg: {span: 7}, sm: {span: 7}}"
              :wrapperCol="{lg: {span: 10}, sm: {span: 17} }"
            >
              <a-input-number
                :min="0"
                v-decorator="[
              'number',
              {rules: [{ required: true, message: '请输入排序优先值' }]}
            ]"
              />
            </a-form-item>
            <a-form-item
              label="最大容纳内容(商品)数"
              :labelCol="{lg: {span: 7}, sm: {span: 7}}"
              :wrapperCol="{lg: {span: 10}, sm: {span: 17} }"
            >
              <a-input-number
                :min="1"
                v-decorator="[
              'number',
              {rules: [{ required: true, message: '请输入最大容纳内容(商品)数' }]}
            ]"
              />
            </a-form-item>
            <a-form-item
              label="是否启用"
              :labelCol="{lg: {span: 7}, sm: {span: 7}}"
              :wrapperCol="{lg: {span: 10}, sm: {span: 17} }"
            >
              <a-switch v-decorator="['switch', { valuePropName: 'checked' }]" />
            </a-form-item>
            <a-form-item
              label="备注"
              :labelCol="{lg: {span: 7}, sm: {span: 7}}"
              :wrapperCol="{lg: {span: 10}, sm: {span: 17} }"
            >
              <a-textarea
                rows="4"
                placeholder="请输入备注"
                v-decorator="[
              'description',
              {rules: [{ required: true, message: '请输入备注' }]}
            ]"
              />
            </a-form-item>
            <a-form-item :wrapperCol="{ span: 24 }" style="text-align: center">
              <a-button htmlType="submit" type="primary">提交</a-button>
            </a-form-item>
          </a-form>
        </a-card>
      </a-col>
    </a-row>
  </page-header-wrapper>
</template>

<script>
import ATree from 'ant-design-vue/lib/tree'

const treeData = [
  {
    title: '母婴',
    key: '0-0',
    children: [
      {
        title: '奶粉',
        key: '0-0-0',
        children: [
          { title: '婴幼奶粉', key: '0-0-0-0' },
          { title: '成人奶粉', key: '0-0-0-1' }
        ]
      },
      {
        title: '营养辅食',
        key: '0-0-1',
        children: [
          { title: '益生菌', key: '0-0-1-0' },
          { title: '果泥', key: '0-0-1-1' },
          { title: '米粉', key: '0-0-1-2' }
        ]
      },
      {
        title: '洗护用品',
        key: '0-0-2',
        children: [
          { title: '宝宝护肤', key: '0-0-2-0' },
          { title: '奶瓶清洗', key: '0-0-2-1' },
          { title: '日常护理', key: '0-0-2-2' }
        ]
      }
    ]
  }, {
    title: '通讯',
    key: '0-0',
    children: [
      {
        title: '手机',
        key: '0-0-0',
        children: [
          { title: '华为', key: '0-0-0-0' },
          { title: 'OPPO', key: '0-0-0-1' },
          { title: '小米', key: '0-0-0-2' },
          { title: 'vivo', key: '0-0-0-3' },
          { title: '苹果', key: '0-0-0-4' },
          { title: '三星', key: '0-0-0-5' }
        ]
      },
      {
        title: '手机配件',
        key: '0-0-1',
        children: [
          { title: '支架', key: '0-0-1-0' },
          { title: '耳机', key: '0-0-1-1' },
          { title: '钢化膜', key: '0-0-1-2' }
        ]
      },
      {
        title: '运营商',
        key: '0-0-2',
         children: [
          { title: '移动', key: '0-0-1-0' },
          { title: '电信', key: '0-0-1-1' },
          { title: '', key: '0-0-1-2' }
        ]
      }
    ]
  }
]

export default {
  name: 'BaseForm',
  components: {
    ATree
  },
  data () {
    return {
      form: this.$form.createForm(this),
      treeData
    }
  },
  methods: {
    onSelect (selectedKeys, info) {
      console.log('selected', selectedKeys, info)
    },
    onCheck (checkedKeys, info) {
      console.log('onCheck', checkedKeys, info)
    },
    // handler
    handleSubmit (e) {
      e.preventDefault()
      this.form.validateFields((err, values) => {
        if (!err) {
          console.log('Received values of form: ', values)
        }
      })
    }
  }
}
</script>
