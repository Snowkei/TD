import Vue from 'vue'
import Router from 'vue-router'
import Login from '../pages/Login/Login'
import Home from '../pages/Home/Home'
import UserManage from '../pages/Home/children/UserManage'//用户管理
import MovieManage from '../pages/Home/children/MovieManage'
import CinemaManage from '../pages/Home/children/CinemaManage'
import HallManage from '../pages/Home/children/HallManage'
import MovieSchedule from '../pages/Home/children/MovieSchedule'
import CommentManage from '../pages/Home/children/CommentManage'
import OrderManage from '../pages/Home/children/OrderManage'


Vue.use(Router)

export default new Router({
  routes: [
    { path:'/',redirect:'/Login', },
    { path:'/Login',component:Login },
    { path:'/Home',component:Home},
    {path:'/UserManage',component:UserManage},
    {path:'/MovieManage',component:MovieManage},
    {path:'/CinemaManage',component:CinemaManage},
    {path:'/HallManage',component:HallManage},
    {path:'/MovieSchedule',component:MovieSchedule},
    {path:'/CommentManage',component:CommentManage},
    {path:'/OrderManage',component:OrderManage},
  ]
})
