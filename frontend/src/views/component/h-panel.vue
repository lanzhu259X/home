
<template>
  <div @click="cardClick" style="margin-bottom: 3px;">
    <card class="panel-body" >
        <div slot="header" class="head">
            <img class="head-img" :src="message.headAvatarUrl" />
            <span class="head-name"> {{message.userName}} </span>
            <span class="head-time">{{message.time | time}}</span>
        </div>
        <div slot="content" class="main">
          <hr class="main-line" color="#d7d9ddbd" size=1 />
          <div class="main-title">{{message.title}}</div>
          <div class="main-content">
              <div class="main-content-world" :style="contentWorldStyle">{{message.content}}</div>
              <div class="main-content-img" v-if="message.contentImg">
                <img :src="message.contentImg" />
              </div>
          </div>
        </div>
        <div slot="footer" class="footer">
            <h-tag message="标签标签"><i slot="icon" class="fa fa-check fa-1x"></i></h-tag>
            <h-tag message="标签标签标签标签" color="#262d3aee" fontColor="#fff"></h-tag>
        </div>
    </card>
  </div>
    
</template>

<script>
import { Card, dateFormat } from 'vux'
import HTag from './h-tag'

export default {
  name: 'HPannel',
  props: {
    message: {
      type: Object,
      required: true
    }
  },
  components: {
    Card,
    HTag
  },
  filters: {
    time(value) {
      if (value) {
        return dateFormat(value, 'YYYY-MM-DD HH:mm')
      }
    }
  },
  computed: {
    contentWorldStyle: function () {
      if (this.message && this.message.contentImg) {
        return "width: 76%"
      } else {
        return ''
      }
    }
  },
  methods: {
    cardClick() {
      console.log('card click');
    }
  }
}
</script>

<style lang="less">
@font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;

.panel-body {
  width: 100%;
  max-height: auto;
  font-family: @font-family;
}

.head {
  margin-top: 10px;
  margin-left: 5px;
  height: 40px;
  &-img {
    height: 35px;
    width: 35px;
    border-radius: 50%;
    border: 3px solid #ececec
  }
  &-name {
    font-weight: 520;
    font-size: 1.1em;
    color: #262d3aee;
    position: relative;
    bottom: 12px;
  }
  &-time {
    font-size: 1.0em;
    font-weight: 400;
    color: #8f95a0bd;
    float: right;
    position: relative;
    top: 10px;
    margin-right: 10px;
  }
}

.main {
  text-align: left;
  margin-left: 10px;
  margin-right: 8px;
  margin-top: 5px;
  margin-bottom: 12px;
  &-line {
    margin: 3px 20px;
  }
  &-title {
    margin-top: 5px;
    font-size: 1.25em;
    font-weight: 540;
    width: 100%;
    height: 2em;
    display: -webkit-box;
    overflow: hidden;
    -webkit-line-clamp: 1;
  }
  &-content {
    height: 4.5em;
    display: flex;
    overflow: hidden;
    -webkit-line-clamp: 3;
    &-world {
      font-size: 1.05em;
      font-weight: 400;
      color: #333b4bb0;
    }
    &-img img {
      width: 4.4em;
      height: 4.4em;
      margin: 0px 10px;
    }
  }
}

.footer {
  margin-bottom: 10px;
  margin-left: 10px;
}


</style>
