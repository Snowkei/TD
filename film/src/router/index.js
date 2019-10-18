import Vue from 'vue'
import Router from 'vue-router'
import My from '../pages/My/My'
import Home from '../pages/Home/Home'

import MovieItem from '../components/MovieItem/MovieItem.vue'
import MovieDetail from '../components/MovieDetail/MovieDetail.vue'
import SearchAll from "../pages/Home/chidren/SearchAll.vue"
import TabBar from '../components/TabBar/TabBar.vue'
import MyInfo from '../pages/My/children/MyInfo.vue'
import ModifyUserName from '../pages/My/children/ModifyUserName.vue'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', redirect: '/home' },
    { path: '/home', name: 'home', component: Home, meta: { showTabBar: true } },
    // { path: '/movie', name: 'movie', component: Movie, meta: { showTabBar: true } },
    // { path: '/cinema', name: 'cinema', component: Cinema, meta: { showTabBar: true } },
    { path: '/my', name: 'my', component: My, meta: { showTabBar: true } },
    { path: '/my_info', name: 'my_info', component: MyInfo },
    // { path: '/my_order', name: 'my_order', component: My_order },
    // { path: '/my_movie', name: 'my_movie', component: MyMovie },
    { path: '/modify_username', name: 'modify_username', component: ModifyUserName },

    // { path: '/search_all', component: SearchAll },
    // { path: '/search_movie', component: SearchMovie },

    // { path: '/movie_detail', name: 'movie_detail', component: MovieDetail },
    // { path: '/cinema_detail', component: CinemaDetail },
    // { path: '/select_cinema', component: SelectCinema },
  ]
})
