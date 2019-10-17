<template>
  <div id="movie">
    <!-- 电影顶部导航 -->
    <div class="tab-header">
      <span class="location">郑州</span>
      <span>正在热映</span>
      <span>即将上映</span>
      <span class="icon-search"></span>
    </div>

    <div class="tab-content">
      <div class="panel">
        <movie-item></movie-item>
      </div>
      <div class="panel">
        <movie-item></movie-item>
      </div>
    </div>
  </div>
</template>

<script>
import {Indicator} from 'mint-ui'
import MovieItem from '../../components/MovieItem/MovieItem'
export default {
  name:"Movie",
  components: {
    // Index,
    MovieItem
  },
  created () {
    // Indicator.open("Loading...");
    // 优化列表数据
    // if(this.$router.query.hotMovie==0){
    //   this.isHotMovie=false;
    // }
    // this.loadMovieList();
  },
  data(){
    return{
      isHotMovie:true,
      server:''
    }
    
  }
}
</script>

<style scoped lang="stylus" ref="stylesheet/stylus">
  #movie
    width 100%
    height 100%
    .tab-header
      display flex
      justify-content space-around
      align-items center
      height 1rem
      width 100%
      font-size .3125rem
      background-color #dd2727
      color white
      position fixed
      left 0
      top 0
      .normal
        opacity .6
        position relative
        display flex
        justify-content center
        align-items center
        height 80%
        &.active
          color #fff
          border-bottom .06rem solid #fff
          opacity 1
      .icon-search
        font-size .48rem
    .tab-content
      margin-top 1rem
      font-size .3125rem
      padding 0 .3rem
      padding-bottom 1rem
      .panel
        width 100%
        .item
          display flex
          justify-content space-around
          align-items center
          padding .2rem 0
          border-bottom .03rem solid #f1f1f1
          img
            display inline-block
            width 20%
          .info
            width 68%
            display flex
            flex-flow column
            padding .25rem
            font-size .28rem
            color #9d9d9d
            .name
              font-weight 700
              font-size .345rem
              padding-bottom .2rem
              color #333
            .type
              padding-bottom .12rem
            .people
              padding-bottom .12rem
              .number
                color #ffb400
                font-family PingFangSC-Regular,Hiragino Sans GB,sans-serif
                font-weight 700
                font-size .315rem
            .score
              padding-bottom .12rem
              .number
                color #ffb400
                font-family PingFangSC-Regular,Hiragino Sans GB,sans-serif
                font-weight 700
                font-size .315rem
          .buy
            width 12%
            padding .16rem .12rem
            text-align center
            background-color #dd2727
            border-radius .08rem
            font-size .25rem
            color #fff
          .presell
            background-color #2d98f3
            width 12%
            padding .16rem .12rem
            text-align center
            border-radius .08rem
            font-size .25rem
            color #fff
</style>
