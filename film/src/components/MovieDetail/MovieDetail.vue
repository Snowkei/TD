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
    // Indicator.open('Loading...');
    // this.loadMovieDetail();
  },
}
</script>