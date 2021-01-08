<template>
  <div class="app-header-account-wrapper" v-if="user">
    <el-dropdown>
      <div class="app-header-account-inner">
        <el-avatar>
          <img
            :size="34"
            :src="
              user.gender === 'boy'
                ? require('@/assets/images/avatar-boy.png')
                : require('@/assets/images/avatar-girl.png')
            "
            alt=""
          />
        </el-avatar>
        <span class="nickname">{{ user.nickname }}</span>
      </div>

      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item>我的档案</el-dropdown-item>
        <el-dropdown-item @click.native="onLogoutButtonClick" divided
          >退出登录</el-dropdown-item
        >
      </el-dropdown-menu>
    </el-dropdown>
  </div>
</template>

<script>
import { mapState } from 'vuex'

import * as Auth from '../../../utils/auth'

export default {
  name: 'app-header-account',

  computed: {
    ...mapState({
      user: (state) => state.user.data,
    }),
  },

  methods: {
    onLogoutButtonClick() {
      Auth.logout()
    },
  },
}
</script>

<style lang="scss" scoped>
.app-header-account {
  &-inner {
    display: flex;
    align-items: center;
    color: #fff;
    font-weight: bold;

    span {
      margin-left: 10px;
    }
  }
}
</style>
