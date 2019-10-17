import Vue from 'vue'
import Router from 'vue-router'

import MovieItem from '../components/MovieItem/MovieItem.vue'
import MovieDetail from '../components/MovieDetail/MovieDetail.vue'
import SearchAll from "../pages/Home/chidren/SearchAll.vue"
import TabBar from '../components/TabBar/TabBar.vue'

import Home from '../pages/Home/Home.vue'
import Movie from '../pages/Movie/Movie.vue'
Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', component: Home},
    { path: '/home', component: Home},
    { path: '/movie',  component: Movie},

    {path:'/movieitem',component: MovieItem},
    {path:'/moviedetail',component: MovieDetail},
    {path:'/searchall',component: SearchAll},
    {path:'/tabbar',component: TabBar},
  ]
})
