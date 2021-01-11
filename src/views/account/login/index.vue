<template>
  <div class="page page-login">
    <el-card class="login-wrapper">
      <img
        src="http://cloud-data-visualization.rootcloud.com/assets/images/system.png"
        alt=""
      />
      <!-- 表单登录 -->
      <div class="login-by-form">
        <el-form
          ref="loginForm"
          label-position="top"
          size="large"
          :model="loginForm"
        >
          <el-form-item label="账号" prop="username">
            <el-input
              clearable
              v-model="loginForm.username"
              auto-complete="off"
              @keyup.enter.native="$refs.password.focus()"
            />
          </el-form-item>

          <el-form-item label="密码" prop="password" class="password-item">
            <el-input
              clearable
              ref="password"
              v-model="loginForm.password"
              type="password"
              auto-complete="off"
              @keyup.enter.native="onSubmitForm"
            />
          </el-form-item>
        </el-form>
        <p style="color: red">账号密码随便输入</p>
        <el-button
          type="primary"
          size="large"
          :loading="submiting"
          @click="onSubmitForm"
        >
          {{ submiting ? '正在提交' : '登录' }}
        </el-button>
      </div>
    </el-card>
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
      console.log(redirect)
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

<style lang="scss" scoped>
@import '../../../styles/themes/default';

.page {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
  background-color: $brand-primary;
}

.login-by-thrid,
.login-by-form {
  width: 100%;

  /deep/ .el-button {
    width: 100%;
  }

  /deep/ .el-button + .el-button {
    margin-top: 15px;
    margin-left: 0;
  }

  /deep/ .el-form-item__label {
    padding-bottom: 0;
    line-height: 2.4em;
  }
}

.login-wrapper {
  width: 350px;

  /deep/ .el-card__body {
    display: flex;
    flex-direction: column;
    align-items: center;

    img {
      width: 200px;
      height: 47px;
      margin-top: 15px;
      margin-bottom: 30px;
    }
  }
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
