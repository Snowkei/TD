import Vue from 'vue'
import Router from 'vue-router'
import Login from '../pages/Login/Login'
import Home from '../pages/Home/Home'
// import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  routes: [
    { path:'/',redirect:'/Login', },
    { path:'/Login',component:Login },
    { path:'/Home',component:Home, }


  ]
})
