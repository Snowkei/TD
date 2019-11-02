<template>
    <div id="my-order">
        <div class="top">
            <span class="icon-back" @click="IsBack"></span>
            <span class="name ellipsis">我的订单</span>
        </div>
        <div class="tips">
        <span class="icon icon-empty-content"></span>
        <span class="text">暂时木有内容呀</span>
      </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            
        }
    },
    methods:{
        IsBack(){
            this.$router.push("/my")
        }
    }
}
</script>

<style scoped>
#my-order{
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
