<template>
<!-- 订单管理 -->
  <div id="order-manage">
    <div class="top">
      <el-col :span="12">
        <el-input class="input-with-select" style="100%" placeholder="请输入内容">
          <el-button slot="append" icon="el-icon-search">搜索</el-button>
        </el-input>
      </el-col>
    </div>
    <!-- 表单 -->
    <div class="order-table">
      <el-table border width="100%">
        <el-table-column label="订单ID" align="center" width="100%" prop="order_id"></el-table-column>
        <el-table-column label="用户名" width="120px" show-overflow-tooltip  align="center" prop="user_name"></el-table-column>
        <el-table-column label="电影名"  align="center"  show-overflow-tooltip prop="name"></el-table-column>
        <el-table-column label="影院名"  align="center"  show-overflow-tooptip prop="cinema_name"></el-table-column>
        <el-table-column label="票数"  align="center"  prop="ticket_num"></el-table-column>
        <el-table-column label="取票码" align="center" prop="phont_code"></el-table-column>
        <el-table-column label="下单时间" show-overflow-tooltip prop="order_date"></el-table-column>
        <!-- 操作 -->
        <el-table-column label="操作" align="center" width="100px">
          <template slot-scope="scope">
            <el-button size="mini" type="danger">撤销</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <!-- 分页 -->
    <div class="block">
      <el-pagination layout="prev,pager,next" :total="25"></el-pagination>
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
  .order-table{
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
