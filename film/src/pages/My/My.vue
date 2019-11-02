<template>
  <div id="my">
    <div class="header">
      <div class="left">
        <div class="avatar">
          <img  @click="$router.push('/login')" src="./images/userIcon.png" alt="">
        </div>
        <span @click="$router.push('login')" class="go-login" v-if="login2==false">登陆/注册</span>
        <div v-else class="user-info">
          <span class="ellipsis" style="font-size:.375rem;line-height:.6rem;margin-bottom:.12rem">{{jsonData.user_name}}</span>
          <span class="ellipsis">{{jsonData.sign? jsonData.sign:'同学有点懒，还没写下签名'}}</span>
        </div>
      </div>
      <div class="right" v-if="!login2==false">
        <span @click="go_my_info">个人信息</span>
        <span class="icon-more"></span>
      </div>      
    </div>
    <div class="content">
        <div class="list">
          <div class="item" @click="GoOrder">我的订单<span class="icon-more"></span></div>
          <div class="item" @click="GoMovie">想看的电影<span class="icon-more"></span></div>
          <div class="item" @click="GoMovie">看过的电影<span class="icon-more"></span></div>
        </div>
      </div>    
  </div>
</template>

<script>
import {Indicator} from 'mint-ui'

export default {
  name:"My",
  data(){
    return{
      login2:false
    }
  },
  created(){
    //判断登陆状态
    // if(){
    //   如果未登陆，隐藏tabbar
    // }
  },
  methods:{
    isLogin(){
      this.login2=true;  
    },
    go_my_info(){
      this.$router.push("/my_info")
    },
    GoOrder(){
      this.$router.push("/my_order")
    },
    GoMovie(){
      this.$router.push("/my_movie")
    }
  }
}
</script>

<style scoped lang="stylus" ref="stylesheet/stylus">
  #my
    width 100%
    height 100%
    .header
      font-size .3125rem
      font-weight bolder
      height 2.8rem
      display flex
      justify-content space-between
      align-items center
      background-color #dd2727
      color #fff
      position relative
      .left
        width 4rem
        height 2rem
        position relative
        display flex
        justify-content center
        align-items center
        margin-left .4rem
        .avatar
          position absolute
          box-sizing border-box
          border .08rem solid #f1f1f1
          left 0
          width 1.6rem
          height 1.6rem
          border-radius 50%
          overflow hidden
          font-size 0
          img
            width 100%
            height 100%
        .go-login
          position absolute
          left 2rem
        .user-info
          width 100%
          position absolute
          left 2rem
          display flex
          flex-flow column
          span:last-child
            font-size .25rem
      .right
        display flex
        font-weight lighter
        justify-content center
        align-items center
        font-size .24rem
        width 1.2rem
        height .4rem
        padding 0 .2rem
        background-color: rgba(255,255,255,.3);
        border-radius .2rem 0 0 .2rem
    .content
      border-top .4rem solid #f1f1f1
      font-size .3125rem
      position fixed
      top 2.8rem
      left 0
      bottom 0
      width 100%
      background-color #f1f1f1
      .list
        background-color #fff
        .item
          display flex
          justify-content space-between
          align-items center
          padding .3rem
          font-size .3125rem
          border-bottom .12rem solid #f1f1f1
        .icon-more
          font-weight 700
</style>
