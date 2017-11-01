<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <!-- 路由匹配到的组件将渲染在这里 -->
    <router-view></router-view>
  </div>
</template>

<script>
import 'normalize.css'
export default {
  data () {
    return {
      image: 'https://img.yzcdn.cn/upload_files/2017/07/19/Fml_7Kkd2H6pLolssY8bqoAPwyU5.png',
      orders: {
        topay: 0,
        toaccept: 0,
        tosend: 6,
        send: 0
      }
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
