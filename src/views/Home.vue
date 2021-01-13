<template>
  <div @click="handleClick">按钮</div>
</template>

<script>
import { loadMicroApp } from 'qiankun'
import store from '../store'
export default {
  name: 'Home',
  data() {
    return {
      microApp: null
    }
  },
  components: {},
  mounted () {
    
  },
  destroyed () {
  },
  methods: {
    handleClick() {
      let LoadableApp = {
        name: 'micro-admin-seed1',
        entry: process.env.VUE_APP_APP2,
        container: '#frame1',
        props: { store },
      }
      this.microApp = loadMicroApp(LoadableApp)
    },
  },
}
</script>

<style lang="scss" scoped>
.page-home {
  height: 100%;
  width: 100%;
  // background-image: url('../assets/images/home-hero.png');
  // background-size: contain;
  background-repeat: no-repeat;
  background-position: top center;
}
</style>
