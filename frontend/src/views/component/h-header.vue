<template>
  <div>
      <x-header :left-options='{showBack: true}'>{{headTitle}}</x-header>
  </div>
</template>

<script>
import {XHeader} from 'vux'

export default {
    name: 'HHeader',
    components: {
        XHeader
    },
    computed: {
        headTitle () {
            return this.$store.state.app.headerTitle
        }
    }
}
</script>

