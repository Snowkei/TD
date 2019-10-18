<template>

  <div id="user-manage">
    <!-- 搜索 -->
    <div class="top">
      <el-col :span="12">
        <el-input placeholder="请输入内容" class="input-with-select" style="width:100%" clearable>
          <el-button slot="append" icon="el-icon-search" >搜索</el-button>
        </el-input>
      </el-col>
      <el-col :span="2" :offset="1">
        <el-button type="primary" size="small" >添加用户</el-button>
      </el-col>
    </div>
    <!-- 表格 -->
    <div class="user-table">
      <el-table border>
        <el-table-column label="用户 ID" align="center" width="100px" prop="user_id"></el-table-column>
        <!-- show-overflow-tooltip属性使用后空属性值鼠标移动上去提示一个黑色悬浮框 -->
        <el-table-column label="用户名" align="center" width="120px" show-overflow-tooltip prop="user_name"></el-table-column>
        <el-table-column label="性别" align="center" width="60px" prop="phone"></el-table-column>
        <el-table-column label="手机" align="center" width="120px" prop="phone"></el-table-column>
        <el-table-column label="个人签名" show-overflow-tooltip prop="sign"></el-table-column>
        <el-table-column label="操作" align="center" width="200px">
          <template slot-scope="scope">
            <el-button size="mini" >编辑</el-button>
            <el-button size="mini" type="danger">注销</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <!-- 分页 -->
    <div class="block">
      <!-- element-ui分页组件 -->
      <el-pagination layout="prev,pager,next" :page-size="8"></el-pagination>
    </div>
    <!-- 用户弹框 -->
    <div>
      <!-- dialog关闭验证 -->
      <el-dialog>
        <el-form label-width="80px">
          <el-form-item label="用户名" prop="user_name">
            <el-col :span="16">
              <el-input></el-input>
            </el-col>
          </el-form-item>
        </el-form>
      </el-dialog>
    </div>
  </div>
</template>

<script>
import {
  getCurrentPageUser,
  upLoadImg,
  updateUserInfo,
  deleteUserInfo,
  addUserInfo
} from "../../../api/index";
import { MessageBox, Message } from "element-ui";
export default {
  data(){
    return{ 

    }
  }
}
</script>




<style scoped>
.user-table {
  width: 90%;
  min-width: 900px;
  margin: 0 auto;
  margin-bottom: 30px;
}
.top {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 30px 0;
  margin-bottom: 30px;
}
.block {
  text-align: center;
}
.el-dialog__header {
  text-align: center;
}
.el-dialog__body .el-form-item {
  padding-left: 20%;
}
</style>

