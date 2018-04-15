<template>
  <div id="main" class="app-main">
    <loading v-model="isLoading"></loading>
    <h-header></h-header>
      <router-view></router-view>
    <h-footer></h-footer>
  </div>
</template>

<script>
import HHeader from '@/views/component/h-header'
import HFooter from '@/views/component/h-footer'
import {Loading} from 'vux'

export default {
  name: 'App',
  components: {
    HHeader,
    HFooter,
    Loading
  },
  computed: {
    isLoading () {
      return this.$store.state.app.isLoading
    }
  }

}
</script>

<style lang="less">
@import '~vux/src/styles/reset.less';

body {
  background-color: #fbf9fe;
}
.app-main {
  width: 100%;
  height: 100%;
  position: fixed;
}
</style>
