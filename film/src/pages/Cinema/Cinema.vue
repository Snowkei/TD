<template>
    <div id="cinema">
      <div class="header">
        <div class="nav">
          <span class="location">郑州</span>
          <span class="title">影院</span>
          <span class=" icon-search" @click="$router.push('./search_cinema')"></span>
        </div>
      </div>
      <div class="content">
        <div class="item" @click="$router.push('/Cinema_Detail')">
          <div class="left">
            <div class="name ellipsis">糖豆影院</div>
            <div class="address">金水区666号糖豆广场</div>
            <div class="label-block">
              <span>小吃</span>
              <span>4D厅</span>
              <span>巨幕厅</span>
              <span>杜比全景声厅</span>
            </div>
          </div>
          <!--<div class="right">-->
            <!--<div class="price-block"><span class="price">23</span>元起</div>-->
          <!--</div>-->
        </div>
      </div>
      <div class="content">
        <div class="item" @click="$router.push('/CinemaDetail')">
          <div class="left">
            <div class="name ellipsis">怪咖影院</div>
            <div class="address">金水区888号怪咖广场</div>
            <div class="label-block">
              <span>小吃</span>
              <span>4D厅</span>
              <span>巨幕厅</span>
              <span>杜比全景声厅</span>
            </div>
          </div>
          <!--<div class="right">-->
            <!--<div class="price-block"><span class="price">23</span>元起</div>-->
          <!--</div>-->
        </div>
      </div>
    </div>
</template>

<script>
import {Indicator} from 'mint-ui'
export default {
  data(){
    return{
      jsonData:[]
    }
  },
  created() {
     //Indicator.open('Loading...');
    // this.loadCinemaList();
  },
  methods:{
    //加载电影列表
    async loadCinemaList(){
      let json=await getCinemaList();
      if(json.success_code===200){
        this.jsonData=json.data;
      }
      Indicator.close();
    }
  }
}
</script>

<style scoped lang="stylus" ref="stylesheet/stylus">
  #cinema
    width 100%
    height 100%
    .header
      font-size .3125rem
      width 100%
      position fixed
      left 0
      top 0
      .nav
        display flex
        justify-content space-between
        align-items center
        height 3rem
        background-color #dd2727
        color white
        position relative
        font-size 1.1rem
        .location
          width 20%
          text-indent .49rem
        .title
          width 60%
          text-align center
          font-size 1.1rem
          line-height .38rem
        .icon-search
          width 20%
          font-size 1.5rem
          text-align center
      .select
        width 100%
        height .8rem
        display flex
        justify-content space-around
        align-items center
        border-bottom .03rem solid #f1f1f1
        box-sizing border-box
        background-color #fff
        .option
          width 33.33%
          box-sizing border-box
          padding .1rem .6rem
          display flex
          justify-content center
          align-items flex-end
          font-size .28rem
          border-right .02rem solid #f1f1f1
          &:last-child
            border-right none
          .arrow
            margin-left .1rem
            padding-bottom .05rem
            &::after
              content ''
              width 0
              height 0
              overflow hidden
              font-size 0
              line-height 0
              border-width .1rem
              border-style solid
              border-color #888 transparent transparent transparent
    .content
      font-size .3125rem
      margin-top 1rem
      padding-bottom .8rem
      .item
        display flex
        justify-content center
        align-items center
        box-sizing border-box
        padding .25rem .3rem
        width 100%
        margin-bottom .25rem
        .left
          width 100%
          margin-top 3rem
          .name
            font-size 1.3rem
            line-height .36rem
            margin-bottom .25rem
            font-weight 700
            float left
          .address
            font-size 1rem
            line-height .3rem
            color #666
            margin-top 2.25rem
            margin-left .1rem
          .ellipsis
            margin-top .25rem
          .label-block
            display flex
            margin-top 1.25rem
            span
              padding .06rem
              font-size .2rem
              border .08rem solid #f90
              margin-right .1rem
              border-radius .25rem
              color #f90
        .right
          width 20%
          text-align center
          .price-block
            color #dd2727
            .price
              font-size .38rem
</style>
