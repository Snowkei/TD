<template>
<!-- 影厅管理 -->
  <div id="hall-manage">
    <!-- 搜索 -->
    <div class="top">
      <el-col :span="12">
        <el-input placeholder="请输入内容" class="input-with-select" style="width: 100%">
          <el-button slot="append" icon="el-icon-search">搜索</el-button>
        </el-input>
      </el-col>
      <el-col :span="2" :offset="1">
        <el-button type="primary" size="small">添加影厅</el-button>
      </el-col>
    </div>
    <!-- 表格 -->
    <div class="hall-table">
      <el-table border width="100%">
        <el-table-column label="影厅 ID" align="center" width="120px" prop="hall_id"></el-table-column>
        <el-table-column label="影院名" align="center" show-overflow-tooltip prop="cinema_name"></el-table-column>
        <el-table-column label="影院电话" align="center"
        width="200px" prop="cinema_phone"></el-table-column>
        <el-table-column label="影厅名" align="center" show-overflow-tooltip  prop="specified_address"></el-table-column>
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
  .hall-table{
  width: 90%;
  min-width: 900px;
  margin: 0 auto;
  margin-bottom: 30px;
  border: 1px solid #ddd; 
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
