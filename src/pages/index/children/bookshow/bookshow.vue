<template>
    <div id="bookshow">
      <el-table :data="tableData2" style="width: 100%" :row-class-name="tableRowClassName">
        <el-table-column prop="date" label="日期" width="180">
        </el-table-column>
        <el-table-column prop="name" label="姓名" width="180">
        </el-table-column>
        <el-table-column prop="address" label="地址">
        </el-table-column>
      </el-table>
    </div>
</template>
<script>

export default {
    name: 'bookshow',
    data() {
        return {

        }
    }
}
</script>
<style lang='stylus'>
#home {
  .el-table .warning-row {
    background: oldlace;
  }

  .el-table .success-row {
    background: #f0f9eb;
  }
}
</style>
