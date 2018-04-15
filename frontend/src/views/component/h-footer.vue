<template>
  <div>
      <tabbar style="position:fixed">
        <tabbar-item selected link="/world">
          <img slot="icon" src="@/assets/world.png">
          <span slot="label">发现</span>
        </tabbar-item>
        <tabbar-item link="/home">
          <img slot="icon" src="@/assets/home.png">
          <span slot="label">Family</span>
        </tabbar-item>
        <tabbar-item link="/myself">
          <img slot="icon" src="@/assets/my.png">
          <span slot="label">我的</span>
        </tabbar-item>
      </tabbar>
  </div>
</template>

<script>
import { Tabbar, TabbarItem } from 'vux'

export default {
  name: "HFooter",
  components: {
    Tabbar,
    TabbarItem
  }
};
</script>
<style lang="less">

</style>


