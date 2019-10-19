import Vue from 'vue'
import Router from 'vue-router'

import MovieItem from '../components/MovieItem/MovieItem.vue'
import MovieDetail from '../components/MovieDetail/MovieDetail.vue'
import SearchAll from "../pages/Home/chidren/SearchAll.vue"
import TabBar from '../components/TabBar/TabBar.vue'
import SearchMovie from '../pages/Movie/children/SearchMovie.vue'

import Login from '../components/Login/Login.vue'
import CinemaDetail from '../components/CinemaDetail/CinemaDetail.vue'
import Cinema from '../pages/Cinema/Cinema.vue'
import Home from '../pages/Home/Home.vue'
import Movie from '../pages/Movie/Movie.vue'
Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', component: Home},
    { path: '/home', component: Home,name:'home',meta:{
      showTabBar:true
    }},
    { path: '/movie',  component: Movie,name:'movie',meta:{
      showTabBar:true
    }},

    {path:'/movieitem',component: MovieItem},
    {path:'/moviedetail',component: MovieDetail},
    {path:'/searchall',component: SearchAll},
    {path:'/tabbar',component: TabBar},
    {path:'/searchmovie',component: SearchMovie},
    {path:'/Cinema',component:Cinema},
    {path:'/CinemaDetail',component:CinemaDetail},
    {path:'/Login',component:Login}
  ]
})
