<template>
<!-- 电影管理 -->
  <div id="movie-manage">
    <!-- 搜索 -->
    <div class="top">
      <el-col :span="12">
        <el-input placeholder="请输入内容" class="input-with-select" style="width: 100%" v-model="input">
          <el-button slot="append" icon="el-icon-search" @click="search">搜索</el-button>
        </el-input>
      </el-col>
      <el-col :span="2" :offset="1">
        <el-button type="primary" size="small" @click="addMovie">添加电影</el-button>
      </el-col>
    </div>
    <!-- 表格 -->
    <div class="movie-table">
      <el-table border>
        <el-table-column label="电影 ID" align="center" width="120px" prop="movie_id"></el-table-column>
        <el-table-column label="电影名" align="center" show-overflow-tooltip prop="name"></el-table-column>
        <el-table-column label="导演" align="center"  show-overflow-tooltip prop="director"></el-table-column>
        <el-table-column label="类型" align="center" width="120px" prop="type"></el-table-column>
        <el-table-column label="上映时间" align="center" width="120px" prop="public_date"></el-table-column>
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

<script>
  import {upLoadMovieImg,getCurrentPageMovie,addMovieInfo,updateMovieInfo,deleteMovieInfo} from '../../../api/index'
  import {MessageBox,Message} from 'element-ui'
  export default {
    name: "MovieManage",
    data (){

      return{
        // 服务器地址
        server:'http://localhost:3000',
        input:'',
        searchInput:'',
        dialogTitle:'',
        dialogFormVisible:false,
      }
    },
    // 添加电影
    addMovie(){
      this.dialogTitle = '添加电影';
      this.MovieInfo = {};
      this.dialogFormVisible = true;
    },
    // 搜索电影
    search(){
      this.searchInput = this.input;
      this.loadCurrentPageMovie(1,8,this.searchInput);
    }
}
</script>





<style>
.top{
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 30px 0;
  margin-bottom: 30px;
} 
  .movie-table{
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
