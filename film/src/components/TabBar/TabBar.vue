<template>
  <!-- 底部组件 -->
  <div id="tab-bar">
    <!-- 首页 -->
    <span class="tab-item" @click="switchTo('./home')">
      <img src alt />
      <span>首页</span>
    </span>
    <!-- 电影 -->
    <span class="tab-item" @click="switchTo('./movie')">
      <img src alt />
      <span>电影</span>
    </span>
    <!-- 影院 -->
    <span class="tab-item" @click="switchTo('./cinema')">
      <img src alt />
      <span>影院</span>
    </span>
    <!-- 我的 -->
    <span class="tab-item" @click="switchTo('./my')">
      <img src alt />
      <span>我的</span>
    </span>
  </div>
</template>

<script>
export default {
  name: "TabBar",
  data () {
    return {
      
    }
  },
  methods: {
    switchTo(path){
      this.$router.replace(path)
    }
  }
};
</script>

<style scoped lang="stylus" ref="stylesheet/stylus">
  #tab-bar
    width 100%
    height 1.041rem
    position fixed
    left 0
    bottom 0
    right 0
    z-index 999
    display flex
    background-color: #fff;
    border-top 1px solid #f1f1f1
    .tab-item
        display flex
        flex 1
        justify-content center
        align-items center
        flex-direction column
        font-size 0.21rem
        margin-bottom 0.041rem
        color #333
        img
          margin-bottom 0.041rem
          width 32%
        .on
          color red
</style>