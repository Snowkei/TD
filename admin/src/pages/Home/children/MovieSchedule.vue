<template>
<!-- 电影拍片 -->
  <div id="movie-schedule">
    <!-- 搜索 -->
    <div class="top">
      <el-col :span="12">
        <el-input placeholder="请输入内容" class="input-with-select" style="width: 100%">
          <el-button slot="append" icon="el-icon-search">搜索</el-button>
        </el-input>
      </el-col>
      <el-col :span="2" :offset="1">
        <el-button type="primary" size="small">安排电影</el-button>
      </el-col>
    </div>
    <!-- 表格 -->
    <div class="schedule-table">
      <el-table border>
        <el-table-column label="排片 ID" align="center" width="120px" prop="schedule_id"></el-table-column>
        <el-table-column label="电影名" align="center" show-overflow-tooltip prop="name"></el-table-column>
        <el-table-column label="影院名" align="center"  show-overflow-tooltip prop="cinema_name"></el-table-column>
        <el-table-column label="放映大厅" align="center"  prop="hall_name"></el-table-column>
        <el-table-column label="放映时间" align="center"  prop="show_date"></el-table-column>
        <el-table-column label="售价(元)" align="center"  prop="price"></el-table-column>
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
  .schedule-table{
  width: 90%;
  min-width: 900px;
  margin: 0 auto;
  margin-bottom: 30px; 
  border:1px solid #ddd; 
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
