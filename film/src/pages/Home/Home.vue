<template>
  <div id="home">
    <div :class="['search-header',{'active':headerActive}]">
      <!-- 城市 -->
      <span class="loaction">郑州</span>
      <!-- 搜索框 -->
      <span class="search" >
        <span class="icon-search"></span>
        <input type="text" placeholder="找电影、影院" @click="$router.push('/search_all')">
      </span>
      <!-- 日期 -->
      <span class="date">
        <span class="calender">
          <!-- 获取当前日期 -->
          <span class="day">{{new Date().getDate()<10?'0'+new Date().getDate():new Date().getDate()}}</span>
        </span>
      </span>
    </div>
    <!-- 轮播图 -->
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <!-- 轮播图片 -->
        <div class="swiper-slide">
          <img src="./images/swiper/1.jpg" alt="" @click="$router.push({path:'/movie_detail',query:{movie_id:5}})">
        </div>
        <div class="swiper-slide">
          <img src="./images/swiper/2.jpg" alt="" @click="$router.push({path:'/movie_detail',query:{movie_id:3}})">
        </div>
        <div class="swiper-slide">
          <img src="./images/swiper/3.jpg" alt="" @click="$router.push({path:'/movie_detail',query:{movie_id:34}})">
        </div>
        <div class="swiper-slide">
          <img src="./images/swiper/4.jpg" alt="" @click="$router.push({path:'/movie_detail',query:{movie_id:4}})">
        </div>
      </div>
      <!-- 如果需要分页器 -->
      <div class="swiper-pagination"></div>
    </div>
    <!-- 首页列表 -->
    <div class="main">
      <!-- 正在热映 -->
      <div class="panel">
        <!-- 列表头部 -->
        <div class="header">
          <span class="red-name">正在热映</span>
          <span class="more" @click="$router.push({path:'/movie',query:{hotMovie:1}})">全部{{hotMovieList.length}}部</span>
          <span class="incon-more"></span>
        </div>
        <!-- 列表主体 -->
        <div class="body">
          <!-- 电影影片列表 -->
          <div class="item" v-for="(item,index) in hotMovieList.slice(0,6)" :key="index">
            <!-- 循环生成 -->
            <img :src="server+item.poster" alt="" @click="$router.push({path:'/movie_detail',query:{movie_id:item.movie_id}})">
            <div style="position:relative">
              <div class="describe">
                <span class="name ellipsis">{{item.name}}</span>
                <span class="srore" v-if="item.score">
                  <!-- 月 -->
                  <i class="interger"></i>
                  <!-- 日 -->
                  <i class="fraction"></i>
                </span>
              </div>
            </div>
            <!-- 购票 -->
            <div class="buy" @click="$router.push({path:'/select_cinema',query:{movie_id:item.movie_id}})">
            </div>
          </div>
        </div>
      </div>
      <!-- 即将上映 -->
      <div class="panel">
        <!-- 即将上映头部 -->
        <div class="header">
          <span class="blue-name">即将上映</span>
          <span class="more" @click="$router.push({path:'/movie',query:{hotMovie:0}})">全部12部</span>
          <span class="icon-more"></span>
        </div>
        <!-- 即将上映主体 -->
        <div class="body">
          <!-- 列表 -->
          <div class="item">
            <!-- 循环生成 -->
            <img src="./images/hot-movie/hot1.jpg" alt="">
            <!-- 观影人数 -->
            <div style="postion:relative">
              <div class="peopleNumber">
                <span class="number" style="font-size: .3rem;font-weight: 600">
                  12
                </span>
                <span>人想看</span>
                <span class="number">暂无想看</span>
              </div>
            </div>
            <!-- 预售 -->
            <div class="presell">
              <div class="name ellipsis">
                电影名称
              </div>
              <div class="info">
                <!-- 预售日期 -->
                <span class="date">
                  12月31日
                </span>
                <!-- 预售按钮 select_cinema-->
                <span class="btn" @click="$router.push('/cinema_detail')">预售</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {getMovieList} from "../../api/index";
import {Indicator} from "mint-ui";
import Swiper from "swiper";
import "swiper/dist/css/swiper.min.css";
export default {
  name:"Home",
  data () {
    return {
      //是否显示头部搜索背景颜色
      headerActive: false,
      //服务器地址
      server: "http://localhost:3000",
      //热门电影列表
      hotMovieList: [],
      //未上映电影列表
      notShowMovieList: []
    }
  },
  created () {
    // 等待加载
    Indicator.open("Loading...");
    this.loadMovieList()
  },
  mounted () {
    // 轮播
    new Swiper(".swiper-container",{
      autoplay:true,
      loop:true,
      // 如果需要分页器
      pagination: {
        el: '.swiper-pagination',
        clickable:true
      }
    });
    window.addEventListener("scroll",this.handleScroll);
  },
  methods: {
    // 处理滚动
    handleScroll() {
      window.pageYOffset > (window.innerWidth * 80) / 360
        ? (this.headerActive = true)
        : (this.headerActive = false);
    },
    // 加载电影列表
    async loadMovieList(){
      let json=await getMovieList();
      json.data.forEach((value,index)=>{
        if(new Date()-new Date(value.public_date)>=0){
          this.hotMovieList.push(value);
        }else{
          this.notShowMovieList.push(value);
        }
      });
      this.hotMovieList.sort((a,b)=>{
        return b.score-a.score;
      });
      this.notShowMovieList.sort((a,b)=>{
        return b.wish_num -a.wish_num;
      });
      Indicator.close();
    }
  }
}
</script>

<style scoped lang="stylus" ref="stylesheet/stylus">
  #home
    width 100%
    height 100%
    .search-header
      font-size 0.3125rem
      position fixed
      left 0
      z-index 999
      width 100%
      height 1rem
      display flex
      justify-content space-around
      align-items center
      &.active
        background-color #dd2727
        transition all .2s
      .location
        border 0.0125rem solid #f1f1f1
        border-radius 0.2rem
        text-align center
        padding .1rem 0.18rem
        color #fff
        background-color rgba(255,255,255,.1)
        display flex
        justify-content center
        align-items center
        font-size .25rem
      .search
        border 0.0125rem solid #f1f1f1
        border-radius 0.3125rem
        padding 0.1rem .125rem
        display flex
        justify-content center
        align-items center
        background-color #fff
        .icon-search
          font-size 0.375rem
        input
          border none
          outline none
          font-size 0.3rem
          margin-left 0.125rem
      .date
        width .6rem
        height .6rem
        border .0125rem solid #f1f1f1
        border-radius .425rem
        background-color rgba(255,255,255,.1)
        display flex
        justify-content center
        align-items center
        .calender
          display flex
          justify-content center
          align-items center
          width 76%
          height 76%
          background url('./images/calender/calender.svg') no-repeat
          -webkit-background-size: cover
          background-size: cover
          .day
            position relative
            top .45em
            color #fff
            font-size .6em
    .swiper-container
      width 100%
      height 3rem
      img
        width 100%
        height 100%
    .main
      width 100%
      border-top-left-radius .25rem
      border-top-right-radius .25rem
      padding-top .25rem
      padding-bottom .8rem
      position relative
      top -0.25rem
      background-color #fff
      z-index 998
      .panel
        font-size .3125rem
        padding .1rem .25rem
        border-bottom .08rem solid #f5f5f5
        .header
          display flex
          justify-content center
          align-items center
          padding 0 .125rem .2rem
          .red-name
            flex 1
            color #dd2727
            font-weight 600
          .blue-name
            flex 1
            color #2d98f3
            font-weight 600
          .more
            flex 1
            text-align right
            vertical-align middle
            font-size .25rem
        .body
          display flex
          flex-wrap wrap
          .item
            width 33.33%
            padding .125rem
            box-sizing border-box
            position relative
            overflow hidden
            img
              width 100%
              vertical-align bottom
            .describe
              position absolute
              left 0
              bottom 0
              width 100%
              display flex
              align-items center
              padding 0 .08rem
              height .4rem;
              box-sizing border-box
              background-color rgba(0,0,0,.4)
              .name
                color #fff
                font-size .25rem
                flex 6
                box-sizing border-box
                width 100%
                font-weight 600
              .score
                color #ffb400
                flex 2
                font-family  PingFangSC-Regular,Hiragino Sans GB,sans-serif
                font-weight 700
                .interger
                  font-size .3rem
                .fraction
                  font-size .25rem
            .buy
              height .6rem
              width 100%
              display flex
              justify-content center
              align-items center
              font-size .25rem
              background-color #dd2727
              color #fff
            .peopleNumber
              color #ffb400
              position absolute
              left 0
              bottom 0
              width 100%
              display flex
              align-items center
              padding 0 .08rem
              height .4rem
              background-color rgba(0,0,0,.4)
              font-size .25rem
              box-sizing border-box
            .presell
              height 1rem
              width 100%
              font-size .25rem
              .name
               font-weight 600
               font-size .25rem
               padding .1rem 0
               width 100%
              .info
                width 100%
                height .6rem
                font-size .25rem
                font-weight lighter
                display flex
                justify-content center
                align-items center
                text-align center
                .date
                  flex 1
                .btn
                  text-align center
                  font-size .25rem
                  flex 1
                  color #fff
                  width 100%
                  box-sizing border-box
                  padding .12rem 0
                  background-color #2d98f3
                  border-radius .2rem
                  box-shadow .02rem .02rem .08rem #2d98f3
      .panel + .panel
        padding-top .25rem
</style>
