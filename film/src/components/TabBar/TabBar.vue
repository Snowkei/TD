<template>
    <div id="tab-bar">
        <!-- <span class="tab-item">
            <img src="./images/home_light.svg" alt="">
            <span>首页</span>
        </span>
        <span class="tab-item">
            <img src="./images/movie_light.svg" alt="">
            <span>电影</span>
        </span>
        <span class="tab-item">
            <img src="./images/cinema_light.svg" alt="">
            <span>影院</span>
        </span>
        <span class="tab-item">
            <img src="./images/my_fill_light.svg" alt="">
            <span>我的</span>
        </span> -->
    </div>
</template>

<script>
export default {

}
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
