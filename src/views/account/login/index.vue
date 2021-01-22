<template>
  <div class="page page-login">
    <a-card class="login-wrapper">
      <img
        style="margin-bottom: 20px"
        src="http://cloud-data-visualization.rootcloud.com/assets/images/system.png"
        alt=""
      />
      <!-- 表单登录 -->
      <div class="login-by-form">
        <a-form
          ref="loginForm"
          :labelCol="{ sm: { span: 4 } }"
          :wrapper-col="{ sm: { span: 20 } }"
          :form="loginForm"
        >
          <a-form-item label="账号" prop="username">
            <a-input
              clearable
              v-model="loginForm.username"
              @keyup.enter.native="$refs.password.focus()"
            />
          </a-form-item>

          <a-form-item label="密码" prop="password" class="password-item">
            <a-input
              clearable
              ref="password"
              v-model="loginForm.password"
              type="password"
              @keyup.enter.native="onSubmitForm"
            />
          </a-form-item>
        </a-form>
        <p style="color: red">账号密码随便输入</p>
        <a-button
          type="primary"
          block
          :loading="submiting"
          @click="onSubmitForm"
        >
          {{ submiting ? '正在提交' : '登录' }}
        </a-button>
      </div>
    </a-card>
  </div>
</template>

<script>
import * as Auth from '../../../utils/auth'

export default {
  name: 'AccountLogin',

  data() {
    return {
      loginType: 'form', // or form
      loginForm: {
        username: '',
        password: '',
        __fields: 'token,uid',
      },
      submiting: false,
    }
  },

  methods: {
    getValidateErrorMessage() {
      if (!this.loginForm.username) return '请输入用户名'
      if (!this.loginForm.password) return '请输入密码'
    },

    onSubmitForm() {
      const errorMessage = this.getValidateErrorMessage()
      if (errorMessage) return this.$message.error(errorMessage)

      this.submiting = true

      // 登录跳转设置token到url上
      const token = new Date().getTime()
      Auth.setToken(token)

      const redirect = decodeURIComponent(this.$route.query.redirect || '')
      if (redirect && /^http/.test(redirect)) {
        const hasQuery = /\?/.test(redirect)
        window.location.assign(
          `${redirect}${hasQuery ? '&' : '?'}token=${token}`
        )
        return
      }

      this.$router.replace({ path: '/' })
    },
  },
}
</script>

<style lang="less" scoped>
@import '../../../styles/themes/default';

.page {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
  background-color: @brand-primary;
}

.login-by-thrid,
.login-by-form {
  width: 100%;
}

.login-wrapper {
  width: 350px;
  text-align: center;
}

.login-by-form {
  .el-form-item:first-of-type {
    margin-bottom: 10px;
  }

  .el-form-item:last-of-type {
    margin-bottom: 30px;
  }
}
</style>
