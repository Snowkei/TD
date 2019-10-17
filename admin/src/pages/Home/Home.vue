<template>
  <div id="home">
    <el-row class="header">
      <div class="head-bar">
        <!-- 左 -->
        <div class="left">
          <i class="icon-film-logo" style="font-size: 48px;margin-right: 5px;"></i>
          <span slot="title" style="font-size: 16px;font-weight: bolder">淘气电影</span>
        </div>
        <!-- 右 -->
        <div class="right">
          <img src="./images/admin.gif" alt="" class="user-avatar" width="40px" height="40px" style="border-radius:20ox">
          <el-dropdown style="margin-left:12px"></el-dropdown>
        </div>
      </div>
    </el-row>
  </div>
</template>



<style>
#home{
  width: 100%;
  height: 100%;
  background-color: #fff;
}
.left,right{
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
