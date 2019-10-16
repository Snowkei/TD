import Vue from 'vue'
import Router from 'vue-router'

import MovieItem from '../components/MovieItem/MovieItem.vue'

import Home from '../pages/Home/Home.vue'
import Movie from '../pages/Movie/Movie.vue'
import My from '../pages/My/My.vue'
Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', component: Home},
    { path: '/home', component: Home},
    { path: '/movie',  component: Movie},

    {path:'/movieitem',component: MovieItem},
    // { path: '/cinema', name: 'cinema', component: Cinema, meta: { showTabBar: true } },
    { path: '/my', component: My, },

    // { path: '/my_info', name: 'my_info', component: MyInfo },
    // { path: '/my_order', name: 'my_order', component: My_order },
    // { path: '/my_movie', name: 'my_movie', component: MyMovie },
    // { path: '/modify_username', name: 'modify_username', component: ModifyUserSign },

    // { path: '/search_all', component: SearchAll },
    // { path: '/search_movie', component: SearchMovie },

    // { path: '/movie_detail', name: 'movie_detail', component: MovieDetail },
    // { path: '/cinema_detail', component: CinemaDetail },
    // { path: '/select_cinema', component: SelectCinema },
  ]
})
