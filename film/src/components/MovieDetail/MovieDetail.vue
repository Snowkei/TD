<template>
  <div id="movie-detail">
    <div class="top">
      <span class="icon-back"></span>
      <span class="name">变形金刚</span>
    </div>
    <!-- 电影接口 -->
    <div class="info">
      <img src="" alt="">
      <div class="describe">
        <div class="name">变形金刚</div>
        <div class="small type">类型:动作，爱情</div>
        <div class="small ellipsis">主演:擎天柱</div>
        <div class="small play-time">片长:2.12.3</div>
        <div class="small show-time">上映:2015.6上映</div>
      </div>
    </div>
    <!--  -->
    <div class="action">
      <div class="btn">
        <span class="icon-like-fill"></span>
        <span>想看</span>
        <div class="btn">
          <span class="icon-star-fill"></span>
          <span>看过</span>
        </div>
      </div>
    </div>
    <!--  -->
    <div class="public-praise">
      <!-- 头部 -->
      <div class="header">
        <div class="title">口碑</div>
        <div class="wish">
          <!-- if-else -->
          <span>5人想看</span>
          <span>暂无想看</span>
        </div>
      </div>
      <!-- 打分 -->
      <div class="mark">
        <div class="left">
          <!-- <el-rate></el-rate> -->
        </div>
        <div class="right">
          <div class="score">2
            <span class="small">分</span>
          </div>
          <div class="score-people">
            11.1w人评
          </div>
        </div>
      </div>
      <!-- 想看 -->
      <div class="wish">
        <span class="wish-number">
          <!-- if-else -->
          <span>想看人数</span>
          <span>暂无</span>
        </span>人想看
      </div>
      <!-- 简介 -->
      <div class="intro">
        <div class="title">简介</div>
        <div class="content">介绍</div>
      </div>
      <!-- 评论 -->
      <div class="comment">
        <!-- 头部 -->
        <div class="header">
          <span class="title">评论</span>
          <span class="join">参与评论</span>
        </div>
        <!-- 内容 -->
        <div class="content">
          <div class="comment-container">
            <span class="title">我的讨论</span>
            <div class="comment-item">
              <div class="left">
                <img src="" alt="">
              </div>
              <div class="right">
                <div class="user-name">复仇者联盟4</div>
                <div class="scored">给这部作品打了12分</div>
                <div class="comment-content">评论内容</div>
                <div class="bottom">
                  <span class="comment-date">评论数据</span>
                  <span class="support">
                    <span class="icon-support"></span>
                    <span class="number">124</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- buy -->
        <div class="buy">
          <div class="btn">特惠购票</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import Vue from vue
import {Indicator} from 'mint-ui'
import {Rate} from 'element-ui'
import moment from 'moment'
// Vue.use(Rate)
export default {
  name:"MovieDetail",
  data(){
    return{
      starValue:0,
      averageScore:0,
      commentNum:0,
      //服务器地址
      server:'http://localhost:3000',
      jsonData:[],
      isShowMovie:false,
      notWishMovie:true,
      currentUserCommentDate:[],
      otherUserCommentDate:[],
    }
  },
  created(){
    Indicator.open('Loading...');
    // this.loadMovieDetail();
  },
  methods: {
    // 电影详情
    // 想看按钮
    // 看过按钮
    // 是否点赞
    // 评论日期
  }
}
</script>

<style scoped lang="stylus" ref="stylesheet/stylus">
  #movie-detail
    width 100%
    height 100%
    background linear-gradient(to bottom, #242342 0%,#11182B 100%)
    color #fff
    font-size .3125rem
    .top
      width 100%
      height 1rem
      display flex
      justify-content center
      align-items center
      margin-bottom .2rem
      position fixed
      top 0
      left 0
      background-color #242342
      z-index 999
      .icon-back
       font-size .4rem
       position absolute
       left .3rem
    .info
      width 90%
      padding .2rem
      box-sizing border-box
      height 3rem
      margin 1rem auto 0
      background-color #fff
      display flex
      justify-content space-around
      align-items center
      color #333
      border-radius .2rem
      img
        width 28%
        box-sizing border-box
        border-radius .05rem
      .describe
        width 62%
        .name
          font-size .345rem
          font-weight 700
          margin-bottom .12rem
        .small
          font-size .28rem
          margin-bottom .12rem
    .action
      width 90%
      height 1rem
      margin 0 auto
      background-color #fff
      display flex
      justify-content space-around
      align-items center
      border-radius .2rem
      .btn
        font-size .4rem
        width 36%
        height .6rem
        border-radius .3rem
        background-color #ffb400
        display flex
        justify-content center
        align-items center
        &.active
          background-color #fff1d4
          color #fe9a02
        span:last-child
          font-size .25rem
          margin-left .1rem
    .public-praise
      width 90%
      height auto
      margin .2rem auto
      box-sizing border-box
      padding .25rem
      background-color #3a3a52
      border-radius .2rem
      .header
        display flex
        justify-content space-between
        align-items center
        margin-bottom .25rem
        .title
          font-weight bolder
        .wish
          font-size .25rem
          padding .04rem 0
      /deep/ .mark
        width 100%
        display flex
        justify-content space-between
        align-items flex-start
        .right
          display flex
          flex-direction column
          justify-content center
          align-items center
          .score
            font-size .68rem
            font-weight bolder
            color #ffb400
            margin-bottom .1rem
            .small
              font-size .25rem
          .score-people
            font-size .2rem
            color #ffb400
        .left
          display flex
          justify-content center
          align-items center
          color #ffb400
          i
            font-size .6rem
      .wish
        font-size .4rem
        padding .2rem 0
        vertical-align text-bottom
        line-height .48rem
        letter-spacing .04rem
        .wish-number
          font-size .48rem
          color #ffb400
          font-weight bolder
    .intro
      width 90%
      height auto
      margin .2rem auto
      box-sizing border-box
      padding .25rem
      background-color #3a3a52
      border-radius .2rem
      .title
        font-weight bolder
        color #fff
        margin-bottom .25rem
      .content
        text-align justify
        font-size .28rem
        line-height .4rem
    .comment
      width 100%
      box-sizing border-box
      padding .25rem
      height auto
      margin 0 auto
      background-color #fff
      color #333
      border-top-left-radius .2rem
      border-top-right-radius .2rem
      .header
        display flex
        justify-content space-between
        align-items center
        height 1rem
        .title
          font-weight bolder
          padding .25rem
        .join
          padding .14rem
          background-color #dd2727
          margin-right .25rem
          color #fff
          border-radius .12rem
          font-size .24rem
      .content
        width 100%
        padding .25rem
        padding-bottom 0
        box-sizing border-box
        margin-bottom 1rem
        .comment-container
          width 100%
          .title
            font-weight lighter
            font-size .25rem
            padding-bottom .25rem
          .comment-item
            display flex
            padding-top .25rem
            .left
              width 10%
              height 10%
              border-radius 50%
              overflow hidden
              img
                width 100%
                height 100%
            .right
              margin 0 .25rem .25rem
              font-size .3125rem
              width 100%
              .user-name
                font-size .25rem
                font-weight bolder
                margin-bottom .1rem
              .scored
                font-size .2rem
                font-weight lighter
                margin-bottom .1rem
              .comment-content
                font-size .28rem
                line-height .4rem
                margin-bottom .1rem
                text-align justify
              .bottom
                display flex
                justify-content space-between
                align-items center
                font-size .28rem
                .comment-date
                  font-size .24rem
                .support
                  padding .1rem
                  border 0.01rem solid #ccc
                  border-radius .24rem
                  &.active
                    color #dd2727
                    border 0.01rem solid #dd2727
                  .number
                    font-weight lighter
                    margin-left .1rem
                    font-size .25rem
        .tips
          font-size .25rem
    .buy
      position fixed
      bottom 0
      width 100%
      height 1rem
      background-color #fff
      color #fff
      display flex
      justify-content center
      align-items center
      .btn
        width 90%
        height .8rem
        background-color #dd2727
        display flex
        justify-content center
        align-items center
        border-radius .4rem
        font-weight light
</style>