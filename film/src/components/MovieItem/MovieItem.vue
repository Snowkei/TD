<template>
  <div class="move-item">
    <img src="../../assets/logo.png" alt="">
    <div class="info">
      <div class="name">釜山行</div>
      <div>
        <div class="descInfo">评分：<span class="number">1</span></div>
        <div class="descInfo">暂无评分</div>
      </div>
      <div>
        <div class="descInfo">想看：<span class="number">2</span>人想看</div>
        <div class="descInfo">暂无想看</div>
      </div>
      <div class="descInfo">类型：电影</div>
      <div class="descInfo ellipsis">主演：<span>成下坡鳄梨</span></div>
       <!-- <span class="buy" :class="{pre_sell: new Date(item.public_date)-new Date()>0}" @click="$router.push({path:'/select_cinema',query:{movie_id:item.movie_id}})">{{new Date(item.public_date)-new Date()>0?'预售':'购票'}}</span> -->
    </div>
  </div>
</template>

<script>
export default {
  name:"MovieItem",
  data(){
    return{
      // 服务器地址
      server:'http://localhost:3000',
    }
  },
  // props: {
  //   movieList: {
  //     type: Array,
  //     require: true,
  //     default: []
  //   }
  // }
}
</script>

<style scoped>
  .movie-item{
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: .2rem 0;
  }
  img{
    display: inline-block;
    width: 20%;
  }
  .info{
    width: 68%;
    display: flex;
    flex-flow: column;
    padding: .25rem;
    font-size: .28rem;
    color: #9d9d9d;
  }
  .name{
    font-weight: 700;
    font-size: .345rem;
    padding-bottom: .2rem;
    color: #333;
  }
  .descInfo{
    padding-bottom: .12rem;
  }
  .number{
    color: #ffb400;
    font-family: PingFangSC-Regular,Hiragino Sans GB,sans-serif;
    font-weight: 700;
    font-size: .315rem;
  }
  .buy{
    background-color: #dd2727;
    border-radius: .08rem;
    font-size: .25rem;
    color: #fff;
    width: 12%;
    padding: .16rem .12rem;
    text-align: center;
  }
  .pre_sell{
    background-color: #2d98f3;
  }
</style>
