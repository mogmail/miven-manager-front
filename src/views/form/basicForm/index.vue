<template>
  <page-header-wrapper content>
    <a-row :gutter="24">
      <a-col :span="12">
        <a-card :body-style="{padding: '24px 32px'}" :bordered="true">
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
      <a-col :span="12">
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
    title: '轮播图',
    key: '0-0',
    slots: {
      icon: 'icon'
    }
  }, {
    title: '活动板块',
    key: '0-1',
    slots: {
      icon: 'icon'
    }
  }, {
    title: '热门商品',
    key: '0-2',
    slots: {
      icon: 'icon'
    }
  }, {
    title: '官方精选',
    key: '0-3',
    slots: {
      icon: 'icon'
    }
  }, {
    title: '品牌周边',
    key: '0-4',
    slots: {
      icon: 'icon'
    }
  }, {
    title: '品牌精选',
    key: '0-5',
    slots: {
      icon: 'icon'
    }
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
