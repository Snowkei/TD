<template>

  <div id="comment-manage">
    <!-- 搜索 -->
    <div class="top">
      <el-col :span="12">
        <el-input placeholder="请输入内容" class="input-with-select" style="width: 100%">
          <el-button slot="append" icon="el-icon-search">搜索</el-button>
        </el-input>
      </el-col>
      <el-col :span="2" :offset="1"></el-col>
    </div>
    <!-- 表格 -->
    <div class="comment-table">
      <el-table border width="100%">
        <el-table-column label="评论 ID" align="center" width="100px" prop="comment_id"></el-table-column>
        <el-table-column label="用户名" align="center" width="120px" show-overflow-tooltip prop="user_name"></el-table-column>
        <el-table-column label="电影名" align="center"
        show-overflow-tooltip prop="name"></el-table-column>
        <el-table-column label="评论时间" align="center" show-overflow-tooltip  prop="commant_date"></el-table-column>
        <el-table-column label="用户评分" align="center" prop="user_score"></el-table-column>
        <el-table-column label="评论内容" align="center" show-overflow-tooltip  prop="commant_date"></el-table-column>
        <el-table-column label=" 操作" align="center" width="200px"></el-table-column>
      </el-table>
    </div>
    <!-- 分页 -->
    <div class="block">
      <el-pagination layout="prev, pager, next" :total="25">
      </el-pagination>
    </div>
  </div>
 </template>




<style>
.top{
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 30px 0;
  margin-bottom: 30px;
} 
  .comment-table{
  width: 90%;
  min-width: 900px;
  margin: 0 auto;
  margin-bottom: 30px; 

} 
 
  .block{
    text-align: center;
  }
  .el-dialog__header{
    text-align: center;
  }
  .el-dialog__body .el-form-item{
    padding-left: 20%;
  }
</style>
