<template>
  <!-- 支付订单 -->
  <div id="pay">
    <div class="top">
      <!-- 返回上一步 -->
      <span class="icon-back" @click="back"></span>
      <span class="name ellipsis">支付订单</span>
    </div>
    <!-- 支付时间 -->
    <div class="order-info">
      <div class="time-down">
          <div class="title">支付剩余时间</div>
          <div class="time">
            <div class="minute">
              <span>{{countdown_m_b}}</span>
              <span>{{countdown_m_s}}</span>
            </div>
            <p>:</p>
            <div class="second">
              <span>{{countdown_s_b}}</span>
              <span>{{countdown_s_s}}</span>
            </div>
          </div>
        </div>
      <!-- order-num -->
      <div class="order-num">
        <span class="left icon-shop"></span>
        <div class="right">
          <div class="total">￥19</div>
          <div class="num">订单编号:10086</div>
        </div>
      </div>
    </div>
    <!-- 支付方式 -->
    <div class="pay-type">
      <!-- 微信支付 -->
      <div class="wechat type">
        <span class="icon icon-wechat"></span>
        <p>微信支付</p>
        <span :class="[{'icon-circle-selected-fill':selectPayType},{'icon-circle-unselect':!selectPayType}]" @click="selectPayType?selectPayType:selectPayType=!selectPayType"></span>
      </div>
      <!-- 支付宝支付 -->
      <div class="alipay type">
        <span class="icon icon-alipay"></span>
        <p>支付宝</p>
        <span :class="[{'icon-circle-selected-fill':!selectPayType},{'icon-circle-unselect':selectPayType}]" @click="!selectPayType?selectPayType:selectPayType=!selectPayType"></span>
      </div>
      <div class="bottom">
        <div class="pay-btn" @click="handlePay">确认支付</div>
      </div>
    </div>
  </div>
</template>

<script>
import {order,getScheduleById,updateScheduleSeat} from '../../api/index'
import {Indicator,MessageBox,Toast} from 'mint-ui'
export default {
  name:"Pay",
  data () {
    return {
      scheduleInfo:{},
      seatInfo:[],
      countdown_m_b:'',
      countdown_m_s:'',
      countdown_s_b:'',
      countdown_s_s:'',
      selectPayType:true,//微信
      timer:'',
    }
  },
  // 加载
  created(){
    Indicator.open('Loading...');
    this.loadInfo();
    if (this.$cookies.get('countdown_m')&&this.$cookies.get('countdown_m')){
      if (!this.$cookies.get('countdown_m')[1]) {
        this.countdown_m_s = Number(this.$cookies.get('countdown_m')[0]);
        this.countdown_m_b = 0;
      }
      if (!this.$cookies.get('countdown_s')[1]) {
        this.countdown_s_s = Number(this.$cookies.get('countdown_s')[0]);
        this.countdown_s_b = 0;
      }
      this.countdown_m_s = Number(this.$cookies.get('countdown_m')[1]);
      this.countdown_m_b = Number(this.$cookies.get('countdown_m')[0]);
      this.countdown_s_s = Number(this.$cookies.get('countdown_s')[1]);
      this.countdown_s_b = Number(this.$cookies.get('countdown_s')[0]);
    }
    this.timer = setInterval(()=>{
      if (this.countdown_s_s!==0){
        this.countdown_s_s-=1;
      } else{
        if (this.countdown_s_b!==0){
          this.countdown_s_b -=1;
          this.countdown_s_s-=1;
          this.countdown_s_s = 9;
        } else{
          if (this.countdown_m_s!==0){
            this.countdown_m_s-=1;
            this.countdown_s_b=5;
            this.countdown_s_s-=1;
            this.countdown_s_s = 9;
          } else{
            if (this.countdown_m_b!==0) {
              this.countdown_m_b-=1;
              this.countdown_m_s=1;
              this.countdown_s_b=5;
              this.countdown_s_s-=1;
              this.countdown_s_s = 9;
            } else{
              clearInterval(this.timer);
              this.back();
            }
          }
        }
      }
    },1000);
  },
  methods: {
    async loadInfo(){
      let json = await getScheduleById(this.$route.query.schedule_id);
      if (json.success_code===200){
        this.scheduleInfo = json.data;
        this.seatInfo = this.scheduleInfo.seat_info;
        this.seatInfo = JSON.parse(this.seatInfo);
      }
      Indicator.close();
    },
    back(){
      // 返回订单页面
      this.$router.go(-1)
    },
    // 确认支付
    handlePay(){
      alert("支付成功")
      this.$router.push('/cinema_detail')
    }
  }
}
</script>

<style scoped lang="stylus" ref="stylesheet/stylus">
  #pay
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
      background-color #dd2727
      color #fff
      .icon-back
        font-size .4rem
        position absolute
        left .3rem
      .name
        width 60%
        font-size .345rem
        text-align center
    .order-info
      margin-top 1rem
      height 3rem
      border-bottom .04rem dashed #f1f1f1
      .time-down
        display flex
        justify-content center
        align-items center
        flex-flow column
        padding-bottom .25rem
        border-bottom .04rem dashed #ccc
        margin 0 .25rem
        .title
          padding .2rem 0
          font-size .28rem
        .time
          display flex
          justify-content center
          align-items center
          span
            font-size .25rem
            display inline-block
            text-align center
            line-height .36rem
            width .36rem
            height .36rem
            background-color: #333
            color #fff
            &:first-child
              margin-right .12rem
          p
            padding 0 .12rem
      .order-num
        display flex
        justify-content center
        align-items center
        padding-top .4rem
        position relative
        .left
          font-size 1rem
          position absolute
          left .8rem
          top .4rem
        .right
          position absolute
          left 2.2rem
          top .4rem
          display flex
          flex-flow column
          .total
            font-size .46rem
            margin-bottom .21rem
          .num
            font-size .28rem
            letter-spacing .02rem
    .pay-type
      border-top .2rem solid #f1f1f1
      position fixed
      width 100%
      left 0
      top 4rem
      bottom 0
      background-color #f1f1f1
      .type
        padding .25rem .3rem
        display flex
        justify-content space-between
        align-items center
        position relative
        border-bottom .04rem solid #f1f1f1
        background-color #fff
        span
          font-size .6rem
        p
          position absolute
          left 1.2rem
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
      .pay-btn
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
