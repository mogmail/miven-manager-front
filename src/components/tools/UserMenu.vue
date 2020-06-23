<template>
  <div class="user-wrapper">
    <div class="content-box">
      <!-- <a href="https://pro.loacg.com/docs/getting-started" target="_blank">
        <span class="action">
          <a-icon type="question-circle-o"></a-icon>
        </span>
      </a>-->
      <!-- <notice-icon class="action" /> -->
      <!-- <router-link :to="{ name: 'info' }">
        <a-tooltip>
          <template slot="title">版本信息</template>
          <a-icon type="info-circle" style="margin-right:10px" />
        </a-tooltip>
      </router-link>-->

      <a-dropdown>
        <span class="action ant-dropdown-link user-dropdown-menu" style="width:118px">
          <!-- <a href="javascript:;" @click="toPass" style="color:rgba(0,0,0,0.65)"> -->
          <!-- <a-avatar class="avatar" size="small" :src="avatar" /> -->
          <a-icon type="user" class="avatar" style="margin-right:10px;color:#1890ff" />
          <span>{{ nickname }}</span>
        </span>
        <a-divider type="vertical" />
        <!-- <a-menu slot="overlay" class="user-dropdown-menu-wrapper" style="width:118px"> -->
        <!-- <a-menu-item key="0">
            <router-link :to="{ name: 'center' }">
              <a-icon type="user"/>
              <span>个人中心</span>
            </router-link>
        </a-menu-item>-->
        <!-- <a-menu-item key="1"> -->
        <!-- <a href="javascript:;" @click="toPass" style="margin-right:10px;color:rgba(0,0,0,0.65)"> -->
        <!-- <a-icon type="setting" /> -->
        <!-- <span style="width:118px">修改密码</span> -->
        <!-- </a> -->
        <!-- </a-menu-item> -->
        <!-- <a-menu-item key="2" disabled>
            <a-icon type="setting"/>
            <span>测试</span>
        </a-menu-item>-->
        <!-- </a-menu> -->
      </a-dropdown>
      <a-divider type="vertical" />
      <a href="javascript:;" @click="handleLogout" style="color:rgba(0,0,0,0.65);margin-left:10px">
        <!-- <a-icon type="logout" /> -->
        <span>退出登录</span>
      </a>
    </div>
    <a-modal title="修改密码" :visible="visible" @ok="handleSubmit" @cancel="handleCancel">
      <a-form :form="form" :label-col="{ span: 5 }" :wrapper-col="{ span: 17 }">
        <input
          type="password"
          style="width:0;height:0;position: absolute;opacity: 0;"
          id="loginPassword"
        />
        <input
          type="text"
          style="width:0;height:0;position: absolute;opacity: 0;"
          id="loginUserName"
        />
        <a-form-item label="账号">
          <a-input
            v-decorator="['account', { rules: [{ required: true, message: '请填写账号' }] }]"
            placeholder="请填写账号"
          />
        </a-form-item>
        <a-form-item label="原始密码">
          <a-input
            type="password"
            v-decorator="['oldpwd', { rules: [{ required: true, message: '请填写原始密码' }] }]"
            placeholder="请填写原始密码"
          />
        </a-form-item>
        <a-form-item label="新密码">
          <a-input
            type="password"
            v-decorator="[
                'newpwd',
                { rules: [{ required: true, message: '请填写新密码' }] },
                ]"
            placeholder="请填写新密码"
          />
        </a-form-item>
        <a-form-item label="重复密码">
          <a-input
            type="password"
            v-decorator="[
            'againpwd',
            { rules: [{ required: true, message: '请重复新密码' },{
                validator: compareToFirstPassword
            }] },
            ]"
            @blur="handleConfirmBlur"
            placeholder="请重复新密码"
          />
        </a-form-item>
        <!-- <a-form-item :wrapper-col="{ span: 10, offset: 7 }">
          <a-button type="primary" html-type="submit">确认提交</a-button>
        </a-form-item>-->
      </a-form>
    </a-modal>
  </div>
</template>

<script>
import NoticeIcon from '@/components/NoticeIcon'
import { mapActions, mapGetters } from 'vuex'
import { EditPwd } from '@/api/api'

export default {
  name: 'UserMenu',
  data () {
    return {
      visible: false,
      formLayout: 'horizontal',
      confirmDirty: false
    }
  },
  beforeCreate () {
    this.form = this.$form.createForm(this, { name: 'register' })
  },
  computed: {
    ...mapGetters(['nickname', 'avatar', 'userInfo'])
  },
  mounted () {
    this.form.resetFields()
    this.$nextTick(() => {
      this.form.setFieldsValue({
        account: this.userInfo.name,
        oldpwd: '',
        newpwd: '',
        againpwd: ''
      })
    })
  },
  components: {
    NoticeIcon
  },
  methods: {
    ...mapActions(['Logout']),
    toPass () {
      this.visible = true
    },
    handleConfirmBlur (e) {
      const value = e.target.value
      this.confirmDirty = this.confirmDirty || !!value
    },
    compareToFirstPassword (rule, value, callback) {
      const form = this.form
      if (value && value !== form.getFieldValue('newpwd')) {
        callback(new Error('两次密码输入不一致，请重新输入'))
      } else {
        callback()
      }
    },
    handleSubmit (e) {
      const _this = this
      e.preventDefault()
      this.form.validateFields((err, values) => {
        if (!err) {
          console.log('Received values of form: ', values)
          const data = {
            account: values.account,
            oldpwd: values.oldpwd,
            newpwd: values.newpwd
          }

          EditPwd(data)
            .then(res => {
              if (res.errno === 0) {
                _this.handleCancel()
                _this.$message.success(res.message)
              } else {
                _this.$message.error(res.message)
              }
            })
            .catch(err => {
              console.log('列表报错', err)
            })
        }
      })
    },
    handleCancel () {
      this.form.setFieldsValue({
        account: this.userInfo.user.account,
        oldpwd: '',
        newpwd: '',
        againpwd: ''
      })
      this.visible = false
    },
    handleLogout () {
      this.$confirm({
        title: '提示',
        content: '真的要注销登录吗 ?',
        onOk: () => {
          return this.Logout({})
            .then(() => {
              setTimeout(() => {
                localStorage.clear()
                window.location.reload()
              }, 16)
            })
            .catch(err => {
              this.$message.error({
                title: '错误',
                description: err.message
              })
            })
        },
        onCancel () { }
      })
    }
  }
}
</script>
