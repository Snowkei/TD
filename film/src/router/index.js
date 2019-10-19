import Vue from 'vue'
import Router from 'vue-router'

import MovieItem from '../components/MovieItem/MovieItem.vue'
import MovieDetail from '../components/MovieDetail/MovieDetail.vue'
import SearchAll from "../pages/Home/chidren/SearchAll.vue"
import TabBar from '../components/TabBar/TabBar.vue'
import SearchMovie from '../pages/Movie/children/SearchMovie.vue'
import Home from '../pages/Home/Home.vue'
import Movie from '../pages/Movie/Movie.vue'
import My from '../pages/My/My.vue'
import MyInfo from '../pages/My/children/MyInfo.vue'
import MyOrder from '../pages/My/children/MyOrder.vue'
import MyMovie from '../pages/My/children/MyMovie.vue'
import ModifyUserName from '../pages/My/children/ModifyUserName.vue'
import ModifyUserSign from '../pages/My/children/ModifyUserSign.vue'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', component:Home},
    { path: '/home', component:Home,name:'home',meta:{showTabBar:true}},
    { path: '/movie',  component: Movie,name:'movie',meta:{showTabBar:true}},
    { path: '/my', name: 'my', component: My, meta: { showTabBar: true }},
    {path:'/movieitem',component: MovieItem},
    { path: '/my_info', name: 'my_info', component: MyInfo },
    { path: '/modify_username', name: 'modify_username', component: ModifyUserName },
    { path: '/modify_usersign', name: 'modify_usersign', component: ModifyUserSign },
    { path: '/my_order', name: 'my_order', component: MyOrder },
    { path: '/my_movie', name: 'my_movie', component: MyMovie },
    {path:'/moviedetail',component: MovieDetail},
    {path:'/searchall',component: SearchAll},
    {path:'/tabbar',component: TabBar},
    {path:'/searchmovie',component: SearchMovie},
  ]
})
