import Vue from 'vue'
import Router from 'vue-router'
import Home from '../pages/Home/Home.vue'
import Movie from '../pages/Movie/Movie.vue'
import MovieItem from '../components/MovieItem/MovieItem.vue'
import MovieDetail from '../components/MovieDetail/MovieDetail.vue'
import TabBar from '../components/TabBar/TabBar.vue'
import Login from '../components/Login/Login.vue'
import Pay from '../components/Pay/Pay.vue'
import CommentPanel from '../components/MovieDetail/children/CommentPanel.vue'
import SubmitOrder from '../components/SubmitOrder/SubmitOrder.vue'
import SelectSeat from '../components/SelectSeat/SelectSeat.vue'
import SearchAll from "../pages/Home/chidren/SearchAll.vue"
import SearchMovie from '../pages/Movie/children/SearchMovie.vue'
import My from '../pages/My/My.vue'
import MyInfo from '../pages/My/children/MyInfo.vue'
import MyOrder from '../pages/My/children/MyOrder.vue'
import MyMovie from '../pages/My/children/MyMovie.vue'
import ModifyUserName from '../pages/My/children/ModifyUserName.vue'
import ModifyUserSign from '../pages/My/children/ModifyUserSign.vue'
import SearchCinema from '../pages/Cinema/children/SearchCinema.vue'
import CinemaDetail from '../components/CinemaDetail/CinemaDetail.vue'
import Cinema from '../pages/Cinema/Cinema.vue'
Vue.use(Router)

export default new Router({
  routes: [

    { path: '/', component: Login },
    { path: '/home', component: Home, name: 'home', meta: { showTabBar: true }  },
    { path: '/my', name: 'my', component: My, meta: { showTabBar: true } },
    { path: '/movie', component: Movie, name: 'movie', meta: { showTabBar: true}  },
    { path: '/cinema', component: Cinema, name: 'cinema', meta: { showTabBar: true} },
    { path: '/tabbar', component: TabBar },

    { path: '/my_info', name: 'my_info', component: MyInfo },
    { path: '/modify_username', name: 'modify_username', component: ModifyUserName },
    { path: '/modify_usersign', name: 'modify_usersign', component: ModifyUserSign },
    { path: '/my_order', name: 'my_order', component: MyOrder },
    { path: '/my_movie', name: 'my_movie', component: MyMovie },
    { path: '/search_all', component: SearchAll },
    { path: '/search_movie', component: SearchMovie },
    { path: '/search_cinema', component: SearchCinema },
    { path: '/movie_item', component: MovieItem },
    { path: '/movie_detail', component: MovieDetail },
    

    { path: '/login', component: Login },
    { path: '/pay', component: Pay },
    { path: '/comment_panel', component: CommentPanel },
    { path: '/submit_order', component: SubmitOrder },
    { path: '/cinema_detail', component: CinemaDetail },
    { path: '/select_seat', component: SelectSeat },
  ]
})
