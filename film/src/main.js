// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import cookies from 'vue-cookies'
Vue.use(cookies)

// import ElementUI from 'element-ui'
// import 'element-ui/lib/theme-chalk/index.css'
// Vue.use(ElementUI)

//引入第三方组件库mint-ui
// 1:完整引入mint-ui组件库中所有组件
// import MintUI from "mint-ui"
// 2:单引入mint-ui库中样式文件
// import "mint-ui/lib/style.css"
// 3:将mint-ui注册vue实例
// Vue.use(MintUI)

Vue.config.productionTip = false

import "./common/css/style.css";
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
