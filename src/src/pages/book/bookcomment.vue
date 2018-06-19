<template>
  <el-table
    :data="tableData"
    style="width: 100%">
    <el-table-column
      label="评价日期"
      width="180">
      <template slot-scope="scope">
        <i class="el-icon-time"></i>
        <span style="margin-left: 10px">{{ scope.row.date }}</span>
      </template>
    </el-table-column>
    <el-table-column
      label="用户名称"
      width="180">
      <template slot-scope="scope">
        <!--<el-popover trigger="hover" placement="top">
          <p>姓名: {{ scope.row.name }}</p>
          <p>住址: {{ scope.row.address }}</p>
          <div slot="reference" class="name-wrapper">
            <el-tag size="medium">{{ scope.row.name }}</el-tag>
          </div>
        </el-popover>--><!--指针滑动变成有显示-->
        <div slot="reference" class="name-wrapper">
            <el-tag size="medium" type="success">{{ scope.row.name }}</el-tag>
        </div>
      </template>
    </el-table-column>
    <el-table-column label="购买数量" width="180">
      <template slot-scope="scope">
          <i class="el-icon-goods"></i>
          <span style="margin-left: 10px">{{ scope.row.num }}</span>
      </template>
    </el-table-column>

    <el-table-column label="用户评分">
      <template slot-scope="scope">
        <el-rate
          v-model="scope.row.scores"
          disabled
          show-score
          text-color="#ff9900"
          score-template="{value}">
        </el-rate>
    </template>
    </el-table-column>

    <el-table-column label="用户评价">
      <template slot-scope="scope">
        <el-input
          type="textarea"
          :rows="2"
          disabled
          v-model="scope.row.judge">
      </el-input>
    </template>
    </el-table-column>

  </el-table>
</template>

<script>
  export default {
    name:'bookcomment',
    data() {
      return {
        tableData: [{
          date: '2018-05-02',
          name: 'geekLR',
          num: 10,
          scores:3.5,
          judge: 'good good good'
        }, {
          date: '2018-05-04',
          name: 'babyQ',
          num: 3,
          scores:4.5,
          judge: 'good good good'
        }, {
          date: '2018-05-01',
          name: '王小虎',
          num: 2,
          scores:1.5,
          judge: 'bad bad bad'
        }, {
          date: '2018-05-03',
          name: 'QingGang',
          num: 3,
          scores:4.5,
          judge: '还是挺好的'
        }]
      }
    },
    methods: {
    }
  }
</script>