<template>
  <div id="movie">
    <!-- 电影顶部导航 -->
    <div class="tab-header">
      <span class="location">郑州</span>
      <span>正在热映</span>
      <span>即将上映</span>
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
export default {
  name:"Movie",
  components: {
    Index,
    MovieItem
  },
  created () {
    Indicator.open("Loading...");
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