<template>
  <div id="app">
    <!-- <div class="row">
      <d-button type="primary">按钮</d-button>
      <d-button type="success">登录</d-button>
      <d-button type="info">删除</d-button>
      <d-button type="danger">删除</d-button>
      <d-button type="warning">删除</d-button>
    </div>
    <div class="row">
      <d-button round type="primary">按钮</d-button>
      <d-button round type="success">登录</d-button>
      <d-button round type="info">删除</d-button>
      <d-button round type="danger">删除</d-button>
      <d-button round type="warning">删除</d-button>
    </div>
    <div class="row">
      <d-button plain circle type="success">登</d-button>
      <d-button plain circle type="primary">钮</d-button>
      <d-button plain circle type="info">除</d-button>
      <d-button plain circle type="danger">除</d-button>
      <d-button plain circle type="warning">除</d-button>
    </div> -->

    <ddialog title="你好" width="60%" top="200px">
      <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
      </ul>
      <template slot="title">
        <h3>cccc</h3>
      </template>
    </ddialog>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="scss" scoped>
.row {
  margin-top: 20px;
  // d-button{
  //   margin-right: 20px
  // }
}
</style>
