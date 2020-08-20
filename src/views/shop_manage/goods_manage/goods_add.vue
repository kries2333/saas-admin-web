<template>
  <div class="app-container">
    <el-form ref="form" :model="form" label-width="120px">
      <el-form-item label="所属店铺">
        <el-select v-model="form.shop_id">
        </el-select>
      </el-form-item>
      <el-form-item label="商品分类">
        <el-select v-model="form.goods_class">
        </el-select>
      </el-form-item>
      <el-form-item label="商品类型">
        <el-select v-model="form.goods_type">
        </el-select>
      </el-form-item>
      <el-form-item label="商品图片">
        <el-button class="el-button el-button--warning el-button--mini" @click="showImagesDlg">上传本地图片</el-button>
      </el-form-item>
      <el-button @click="onCancel">返回</el-button>
      <el-button @click="onSubmit">确定</el-button>
    </el-form>
    <el-dialog :modal="true" :visible.sync="dialogVisible" width="50%">
      <el-form ref="imagesForm">
        <el-upload
          :action="uploadAction"
          list-type="picture-card"
          ref="upload"
          name="files"
          multiple
          :auto-upload="false"
          :on-preview="handlePictureCardPreview"
          :on-remove="handleRemovePicture"
          :on-exceed="handleExceedPicture"
          :on-change="handlePictureChange">
          <i class="el-upload el-upload--picture-card"></i>
        </el-upload>
        <el-dialog append-to-body title="图片详情" :visible.sync="imagesDialogVisible">
          <img :src="dialogImageUrl" alt="">
        </el-dialog>
        <el-button>取消</el-button>
        <el-button @click="submitUpload">确定</el-button>
      </el-form>
    </el-dialog>
  </div>

</template>

<script>
export default {
  data() {
    return {
      dialogVisible: false,
      imagesDialogVisible: false,
      form: {
        shop_id: '',
        goods_type: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: ''
      }
    }
  },
  methods: {
    showImagesDlg() {
      this.dialogVisible = true
    },
    uploadAction() {

    },
    dialogImageUrl() {

    },
    submitUpload() {

    },
    handlePictureCardPreview() {
      console.log('handlePictureCardPreview')
    },
    handleRemovePicture() {
      console.log('handleRemovePicture')
    },
    handleExceedPicture() {
      console.log('handleExceedPicture')
    },
    handlePictureChange(file) {
      console.log('handlePictureChange')
      this.tableData.push({
          title: '',
          comment: '',
          image_url: file.url,
          file_raw: file.raw,
        })
    },
    onSubmit() {
      this.$message('submit!')
    },
    onCancel() {
      this.$message({
        message: 'cancel!',
        type: 'warning'
      })
    }
  }
}
</script>

<style scoped>
.line{
  text-align: center;
}
</style>