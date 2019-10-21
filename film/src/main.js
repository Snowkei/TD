// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import cookies from 'vue-cookies'
// 配置字体图标
import "./common/css/style.css";
Vue.config.productionTip = false;

Vue.use(cookies)

// 引入第三方组件库element-ui
import ElementUI from 'element-ui'
// 单引入element-ui库中样式文件
import 'element-ui/lib/theme-chalk/index.css'

//  将element-ui注册vue实例
Vue.use(ElementUI);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
