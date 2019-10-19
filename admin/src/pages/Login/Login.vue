<template>
<!-- 最外层父元素 -->
  <div id="login">
    <!-- 父元素 -->
    <div class="box">
      <!-- 表单 -->
      <el-form label-width="50px">
        <h3>影院售票管理系统</h3>
        <el-form-item label="用户">
          <el-input placeholder="请输入用户名"></el-input>
        </el-form-item>
        <el-form-item label="密码">
          <el-input placeholder="请输入密码"></el-input>
        </el-form-item>
        <!-- 按钮 -->
        <el-form-item style="margin-top:30px">
          <el-button>重置</el-button>
          <el-button type="primary" size="medium">登录</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<style>
#login{
  width: 100%;
  height: 100%;
  background: url('./images/bg_admin.png');
  background-size: cover;/*按照图片的比例放大或者缩小至充满容器，*/
  display: flex;/*弹性布局 水平居中 垂直居中*/
  justify-content: center;
  align-items: center;
  flex-flow: column;
  color: #fff;
}
.box{
  width: 500px;
  height: 400px;
  background-color: rgba(255, 255, 255, .8);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column;/*默认flex都是x轴布局，声明为column后变成y轴布局*/
  border-radius: 4px;
  box-shadow: 0 0 8px 8px #ccc;
}
h3{
  margin-bottom: 40px;
  font-size: 36px;
  letter-spacing: 2px;/*每个中文字的间隔为2px*/
  color: #888;
  text-align: center;
}
</style>
