<template>
    <div id="my-movie">
      <div class="top">
        <span class="icon-back" @click="$router.go(-1)"></span>
        <span class="name ellipsis">我的电影</span>
      </div>
      <div class="movie">
        <div class="option">
          <span :class="{active:!isWatched}" @click="isWatched=false;">想看</span>
          <span :class="{active:isWatched}" @click="isWatched=true;">看过</span>
        </div>
        <!-- <div v-show="!isWatched" class="want">
          <movie-item :movie-list="wishMovie"></movie-item>
          <div class="tips" v-if="wishMovie.length===0">
            <span class="icon icon-empty-content"></span>
            <span class="text">暂时木有内容呀</span>
          </div>
        </div> -->
    </div>
    <div class="tips">
        <span class="icon icon-empty-content"></span>
        <span class="text">暂时木有内容呀</span>
    </div>
</div>
</template>

<script>
import Vue from 'vue'
import {Rate} from 'element-ui'
import {Indicator} from 'mint-ui'
export default {
    data(){
        return{
            isWatched:false,
        }
    }
}
</script>

<style scoped>
#my-movie{
    width:100%;
    height:100%;
    font-size:.3125rem;
}
.top{
    width:100%;
    height:1rem;
    display:flex;
    justify-content:center;
    align-items:center;
    position:fixed;
    top:0;
    left:0;
    background-color:#dd2727;
    color:#fff;
}
.icon-back{
    font-size:.4rem;
    position:absolute;
    left:.3rem;
}
.movie{margin-top:1rem;}
.option{
    display:flex;
    justify-content:center;
    align-items:center;
    border-bottom :.12rem solid #f1f1f1;
    position :fixed;
    left :0;
    width: 100%;
    background-color :#fff;
    height :.8rem;
}
span{
    padding:.25rem;
    box-sizing:border-box;
    font-size:.3rem;
    border-bottom:.04rem solid transparent;
}
    
.active{
    color:#dd2727;
    border-bottom:.04rem solid #dd2727;
}
.tips{
    display:flex;
    justify-content:center;
    align-items:center;
    flex-flow:column;
    font-size:.28rem;
    padding-top:4rem;
    border-top:.04rem solid #f1f1f1;
}
.icon{
    font-size:1.6rem;
    margin-bottom:.25rem;
}
.text{
    color:#ccc;
}         
</style>
