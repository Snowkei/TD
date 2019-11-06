<template>
<!-- 确认订单 -->
  <div id="submit-order">
    <!-- 顶部倒计时 -->
    <div class="top">
      <span class="icon-back" @click="$router.go(-1)"></span>
      <span class="name ellipsis">确认订单</span>
      <!-- 支付倒计时 -->
      <div class="time-down">
        <span class="icon-time"></span>
        <span class="time">{{countdownM | timeFilter}}:{{countdownS | timeFilter}}</span>
      </div>
    </div>
    <!-- 订单信息 -->
    <div class="order-info">
      <!-- 电影详情 -->
      <div class="info movie-name">电影名称</div>
      <div class="info date">
        <span class="day">2019年11月30日</span>
        <span class="time">12:05</span>
        <span class="labguage">国语3D</span>
      </div>
      <!-- 影院详情 -->
      <div class="info cinema">奇葩影院</div>
      <div class="info location">
        <span class="hall">1号激光厅</span>
        <span class="seat">3排3座</span>
      </div>
    </div>
    <!-- 注意事项 -->
    <div class="content">
      <div class="tips">
        <p class="title">购票须知</p>
        <div class="intro">
          <p>1.请确认场次和时间无误，购买成功后将不予以退还</p>
          <p>2.由于设备故障等不可抗力因素，存在少量场次取消的情况，会进行退票退款</p>
          <p>3.由于影院系统不稳定等因素，存在出票失败的情况，会进行退款</p>
          <p>4.购票成功后，会收到取票码</p>
          <p>5.下单即代表你同意我们的用户服务协议</p>
        </div>
      </div>
      <!-- 订单手机号码 -->
      <div class="phone-container">
        <div class="phone">
          <label>手机号</label>
          <!-- <span>14356849835</span> -->
          <el-input v-model="phone" clearable></el-input>
        </div>
        <div class="text">
          提示：手机号用于生成订单，并以短信方式将取票码发送到手机上
        </div>
      </div>
      <!-- 底部 -->
      <div class="bottom">
        <div class="intro">
          <div class="text">不支持退票、改签</div>
          <div class="toal">应支付
            <span class="money">40
              <span>元</span>
            </span>
          </div>
        </div>
        <div class="submit-btn" @click="handleSubmitOrder">提交订单</div>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import {Toast,Indicator,MessageBox} from 'mint-ui'
import {Input} from 'element-ui'
Vue.use(Input);
export default {
  name:"SubmitOrder",
  data () {
    return {
      cinemaInfo:{},
      movieInfo:{},
      scheduleInfo:{},
      seatInfo:'',
      phone:'',
      countdownM:14,
      countdownS:59,
      timer:'',
    }
  },
  created () {
    //  Indicator.open('Loading...');
    //  this.loadInfo();
    this.timer = setInterval(()=>{
      this.countdownS = Number(this.countdownS);
      this.countdownM = Number(this.countdownM);
      if (this.countdownS===0) {
        if (this.countdownM!==0){
          this.countdownM-=1;
          this.countdownS = 59;
        } else{
          clearInterval(this.timer);
          this.backSeatInfo();
        }
      } else{
        this.countdownS-=1;
      }
    },1000);
  },
  methods: {
    handleSubmitOrder(){
      alert('提交成功')
      this.$router.push('/pay')
    }
  },
  filters: {
    dateFilter(date){

    },
    timeFilter(time){
     if (Number(time)<=9){
        return '0'+time;
      }else{
        return time;
      }
    }
  }
}
</script>

<style scoped lang="stylus" ref="stylesheet/stylus">
  #submit-order
    width 100%
    height 100%
    color #000
    font-size .3125rem
    .top
      width 100%
      height 1rem
      display flex
      justify-content center
      align-items center
      position fixed
      top 0
      left 0
      background-color #779db0
      color #fff
      .icon-back
        font-size .4rem
        position absolute
        left .3rem
      .name
        width 60%
        text-align center
        font-size .375rem
      .time-down
        position absolute
        right .3rem
        display flex
        justify-content center
        align-items center
        .icon-time
          font-size .4rem
          margin-right .08rem
    .order-info
      margin-top 1rem
      background-color #779db0
      color #fff
      padding .3rem
      height 2rem
      .info
        margin-bottom .25rem
        font-size .28rem
        span
          margin-right .12rem
      .movie-name
        font-size .375rem
        font-weight 700
    .content
      background-color #f1f1f1
      width 100%
      position fixed
      top 3.6rem
      left 0
      bottom 0
      .phone-container
        background-color #fff
        display flex
        flex-flow column
        margin-top .12rem
        /deep/ .phone
          width 100%
          box-sizing border-box
          height 1rem
          line-height 1rem
          display flex
          border-bottom .02rem solid #f1f1f1
          label
            width 20%
            color #333
            font-size .3rem
            height 1rem
            display flex
            box-sizing border-box
            margin-left .3rem
          .el-input
            vertical-align middle
            width 80%
            font-size .375rem
            .el-input__inner
              border none
              outline none
              padding 0
              letter-spacing .02rem
        .text
          color #dd2727
          font-size .25rem
          line-height .4rem
          padding .25rem .3rem
          letter-spacing .02rem
      .tips
        display flex
        flex-flow column
        background-color #fff
        padding .3rem
        p
          margin-bottom .12rem
          font-size .25rem
          color #888
          line-height .4rem
          letter-spacing .02rem
          text-align justify
        .title
          color #333
          font-size .3125rem
          font-weight 700
          padding-bottom .25rem
          border-bottom .02rem solid #f1f1f1
    .bottom
      border-top .02rem solid #f1f1f1
      position fixed
      width 100%
      left 0
      bottom 0
      display flex
      justify-content center
      align-items center
      flex-flow column
      padding .25rem
      box-sizing border-box
      z-index 999
      background-color #fff
      .intro
        width 100%
        margin-bottom .25rem
        display flex
        justify-content space-between
        font-size .28rem
        padding .12rem 0
        .text
          color #ffb400
        .total
          color #888
          .money
            font-size .3125rem
            color #dd2727
            margin-left .12rem
          span
            color #dd2727
            font-size .2rem
            margin-left .12rem
      .submit-btn
        width 100%
        background-color #fe9900
        color #fff
        height .8rem
        display flex
        justify-content center
        align-items center
        border-radius .12rem
        font-size .28rem
</style>
