// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import axiosPlugin from './utils/axios' // 全局使用axios插件
import helperPlugin from './utils/helper' // 全局使用helper插件
import jsBridgePlugin from './utils/jsBridge' // 全局使用桥接插件

Vue.config.productionTip = false

Vue.use(axiosPlugin)
Vue.use(helperPlugin)
Vue.use(jsBridgePlugin)

/* eslint-disable no-new */
const MaiDaoInstance = new Vue({
  el: '#app',
  router,
  store,
  // template: '<App/>',
  // components: { App }
  render: h => h(App)
})

window.MaiDaoInstance = MaiDaoInstance
