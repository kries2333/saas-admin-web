<template>
  <div class="app-container">
    <el-button @click="onReleaseData">发布</el-button>
    <el-table :data="tableData" @selection-change="onTableSelect">
      <el-table-column type="selection" @selection-change="onTableSelect"></el-table-column>
      <el-table-column label="ID" width="120" prop="id"></el-table-column>
      <el-table-column label="标题" prop="title">
      </el-table-column>
      <el-table-column label="神评" prop="comment">
      </el-table-column>
      <el-table-column label="图片" prop="url">
        <template slot-scope="scope">
          <img width="50" height="50" :src="scope.row.image_url" alt="">
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>