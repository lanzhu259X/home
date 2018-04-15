<template>
  <scroller :lock-x="true" :lock-y="false">
    <div class="c-body">
      
        <div class="c-head">
            <div class="c-head-avatar">
              <img :src="headAvatarUrl" />
              <p class="c-head-alias">{{userAlias}}</p>
              <p class="c-head-account">账号: {{custNo}}</p>
            </div>
            <div class="c-head-edit">
                <i class="fa fa-bars fa-2x"></i>
            </div>
            <div class="c-head-tag">
              <h-tag message="标签1"></h-tag><br/>
              <h-tag message="标签AAA"><i class="fa fa-check fa-1x"></i></h-tag><br/>
              <h-tag message="BBBBBBBBBB"></h-tag>
          </div>
        </div>
        
        <div class="c-middle">
          <div class="c-middle-motto">{{lifeMotto}}</div>
        </div>

        <div class="c-footer">
          <h-panel v-for="(item, index) in messageList" :key="index" :message="item"></h-panel>
          <div class="c-footer-end">
            <divider class="c-footer-end-divider">到底了, 别拉了.</divider>
          </div>
        </div>
    </div>
  </scroller>
</template>

<script>
import { Scroller, Divider } from 'vux'
import HPanel from "../component/h-panel"
import HTag from "../component/h-tag"

export default {
  name: 'HMySelf',
  components: {
    Scroller,
    Divider,
    HPanel,
    HTag
  },
  data() {
    return {
      // backgroundUrl: 'https://o3e85j0cv.qnssl.com/tulips-1083572__340.jpg',
      headAvatarUrl: 'https://o3e85j0cv.qnssl.com/tulips-1083572__340.jpg',
      userAlias: '星空懒猪',
      custNo: '12345678',
      lifeMotto: '太帅了, 还没想到更好的个性签名.',
      messageList: [
        {
          headAvatarUrl: 'https://o3e85j0cv.qnssl.com/tulips-1083572__340.jpg',
          userName: '星空懒猪',
          title: '这是一个标题',
          time: new Date(),
          content: '这是一段内容....这是一段内容....',
          contentImg: 'https://o3e85j0cv.qnssl.com/tulips-1083572__340.jpg'
        },
        {
          headAvatarUrl: 'https://o3e85j0cv.qnssl.com/tulips-1083572__340.jpg',
          userName: '星空懒猪',
          title: '这是一个标题AAAAAA',
          time: new Date(),
          content: '这是一段内容....这是一段内容....这是一段内容....这是一段内容....这是一段内容....这是一段内容....这是一段内容....这是一段内容....这是一段内容....这是一段内容....这是一段内容....这是一段内容....这是一段内容....这是一段内容....这是一段内容....这是一段内容....这是一段内容....这是一段内容....',
          contentImg: 'https://o3e85j0cv.qnssl.com/tulips-1083572__340.jpg'
        },
        {
          headAvatarUrl: 'https://o3e85j0cv.qnssl.com/tulips-1083572__340.jpg',
          userName: '星空懒猪',
          title: '这是一个标题BBBBBBBBBBBBBBBBBBBB',
          time: new Date(),
          content: '这是一段内容....这是一段内容....这是一段内容....这是一段内容....这是一段内容....这是一段内容....这是一段内容....这是一段内容....这是一段内容....这是一段内容....这是一段内容....这是一段内容....这是一段内容....这是一段内容....这是一段内容....这是一段内容....这是一段内容....这是一段内容....'
        }
      ]
    }
  }
}
</script>

<style lang="less">
@font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;

.c-body {
  height: 100%;
}

.c-head {
  height: 200px;
  background-color: #495060;
  padding-left: 40px;
  img {
      margin-top: 15px; 
      height: 100px;
      width: 100px;
      border-radius: 50%;
      border: 3px solid #ececec
  }
  p {
    padding-left: 15px;
  }
  .c-head-alias {
    font-family: @font-family;
    font-size: 20px;
    color: #fff;
    font-weight: 500;
  }
  .c-head-account {
    font-size: 15px;
    font-family: @font-family;
    color: #8f95a0bd;
  }
  .c-head-edit {
    position: fixed;
    top: 60px;
    right: 20px;
  }
  .c-head-tag {
    position: absolute;
    top: 110px;
    right: 20px;
    text-align: right;
  }
}

.c-middle {
  height: auto;
  background-color: #495060;
  padding-left: 20px;
  .c-middle-motto {
    padding: 5px 0px;
    font-family: @font-family;
    color: #d7d9ddbd;
  }
}

.c-footer {
  width: 100%;
  height: auto;
  background-color: #d7d9ddbd;
  &-end {
    height: 4em;
    background-color: #fff;
  }
}

</style>

