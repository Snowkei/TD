import Vue from 'vue'
import Router from 'vue-router'

import MovieItem from '../components/MovieItem/MovieItem.vue'
import MovieDetail from '../components/MovieDetail/MovieDetail.vue'
import TabBar from '../components/TabBar/TabBar.vue'
import Login from '../components/Login/Login.vue'
import Pay from '../components/Pay/Pay.vue'
import CommentPanel from '../components/MovieDetail/children/CommentPanel.vue'
import SubmitOrder from '../components/SubmitOrder/SubmitOrder.vue'

import SearchAll from "../pages/Home/chidren/SearchAll.vue"
import SearchMovie from '../pages/Movie/children/SearchMovie.vue'
import SearchCinema from '../pages/Cinema/children/SearchCinema.vue'


import Home from '../pages/Home/Home.vue'
import Movie from '../pages/Movie/Movie.vue'
import Cinema from '../pages/Cinema/Cinema.vue'
Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', component: Login},
    { path: '/home', component: Home,name:'home',meta:{
      showTabBar:true
    }},
    { path: '/movie',  component: Movie,name:'movie',meta:{
      showTabBar:true
    }},
    { path: '/cinema', component: Cinema,name:'cinema',meta:{
      showTabBar:true
    }},

    {path:'/search_all',component: SearchAll},
    {path:'/search_movie',component: SearchMovie},
    {path:'/search_cinema',component: SearchCinema},
    {path:'/movie_item',component: MovieItem},
    {path:'/movie_detail',component: MovieDetail},
    
    {path:'/tabbar',component: TabBar},
    
    {path:'/login',component: Login},
    {path:'/pay',component: Pay},
    {path:'/comment_panel',component: CommentPanel},
    {path:'/submit_order',component: SubmitOrder},
  ]
})
