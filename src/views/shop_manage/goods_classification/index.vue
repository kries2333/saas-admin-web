<template>
    <div class="app-container">
        <el-button @click="onAddGoods">添加单个商品</el-button>
        <el-table :data="tableData" @selection-change="onTableSelect">
            <el-table-column type="selection" @selection-change="onTableSelect"></el-table-column>
            <el-table-column label="图片" prop="url">
            <template slot-scope="scope">
                <img width="50" height="50" :src="scope.row.image_url" alt="">
            </template>
            </el-table-column>
            <el-table-column label="ID" prop="id"></el-table-column>
            <el-table-column label="编号/条码" prop="title">
            </el-table-column>
            <el-table-column label="门店/分类/品牌" prop="comment">
            </el-table-column>
            <el-table-column label="标题" prop="title">
            </el-table-column>
            <el-table-column label="库存/状态" prop="stock">
            </el-table-column>
            <el-table-column label="价格" prop="price">
            </el-table-column>
            <el-table-column label="数据统计" prop="statistics">
            </el-table-column>
            <el-table-column label="操作" prop="control">
            </el-table-column>
        </el-table>
    </div>
</template>