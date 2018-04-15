
<template>
  <span class="tag-body" :style="{backgroundColor: color}">
      <span class="tag-span" :style="{color: fontColor}"><slot name="icon"></slot>{{message}}</span>
  </span>
</template>

<script>
export default {
  name: 'HTag',
  props: {
      color: {
          type: String,
          default: '#f37171ec'
      },
      fontColor: {
          type: String,
          default: '#fff'
      },
      message: {
          type: String,
          default: ''
      }
  }
}
</script>

<style>

.tag-body {
    height: 20px;
    line-height: 20px;
    border-radius: 10px;
    text-align: center;
    vertical-align: middle;
    font-size: 12px;
    font-weight: 100;
    padding: 2px 5px;
}
.tag-span {
    padding: 0 0.3em;
    font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
}
</style>

