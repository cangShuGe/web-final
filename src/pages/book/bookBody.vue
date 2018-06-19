<template>
  <div class="bookall">
    <div class ="bookbody" style="padding: 100px;">
        <el-row :gutter="15"><!--列和列之间的间距--> <!--一行但是有很多列-->
            <el-col :span="12">
                <div class="grid-content bg-purple">
                    <img src="static/img/linghundemuchang.jpg" alt="书籍封面">
                </div>
            </el-col>
            <el-col :span="12">
                <div class="grid-content bg-purple">
                    <el-form ref="form" label-width="80px">
                        <el-form-item label="书籍名称">
                            <el-tag>灵魂的牧场</el-tag>
                        </el-form-item>
                        <el-form-item label="作者">
                            <el-tag type="success">倪道辉</el-tag>
                        </el-form-item>
                        <el-form-item label="出版社">
                            <el-tag type="info">大象文化出版社</el-tag>
                        </el-form-item>
                        <el-form-item label="出版时间">
                            <el-tag type="info">2016-12-23 12:31:33</el-tag>
                        </el-form-item>
                        <el-form-item label="抵押金币">
                            <el-switch v-model="form.discord"></el-switch>  
                            <el-tag type="danger"> <i class="el-icon-star-off"></i>注：使用金币可抵押2%的费用</el-tag>
                        </el-form-item>
                        <el-form-item label="配送至">
                            <el-cascader
                                :options="options2"
                                @active-item-change="handleItemChange"
                                :props="props"
                            ></el-cascader>
                        </el-form-item>
                        <el-form-item label="详细地址">
                            <el-input type="textarea" v-model="form.address" style="width: 250px;height: 50px"></el-input>
                        </el-form-item>
                        <el-form-item label="购买数量">
                            <el-input-number v-model="form.num1" @change="handleChange" :min="1" :max="10" size="small"></el-input-number>
                        </el-form-item>
                        <el-form-item>
                            <el-button type="primary" @click="onSubmit">立即购买</el-button>
                            <el-button type="primary" @click="toCart">加入购物车</el-button>
                        </el-form-item>
                    </el-form>
                </div>
            </el-col>
        </el-row>
    <!--</div>
      <el-row :gutter="12">-->
            <!-- table -->
            <!--<el-col :span="12"><my-table></my-table></el-col>
      </el-row>
    <div> --><!--展示这本书籍的所有评论以及评分-->
    </div>
    <div class="comment" style="padding: 100px;">
      <my-comment></my-comment>
    </div>
  </div>
</template>
<script>
  import myComment from './bookcomment'
export default {
    name: 'bookbody',
    components:{myComment},
    data() {
      return {
        form: {
          discord: false,
          address: '山东省威海市环翠区哈尔滨工业大学（威海）4公寓',
          num1: 1
        },
        options2: [{
          label: '江苏',
          cities: []
        }, {
          label: '浙江',
          cities: []
        }],
        props: {
          value: 'label',
          children: 'cities'
        },
      }
    },
    methods: {
      onSubmit() {
        console.log('submit!');
      //  this.$router.push({name:''})
      //this.$router.go()//历史也页面 -1是上一个  0是当前页面 
      this.$router.push({path:'/index/book'})
      },
      toCart(){
        console.log('我要去购物车了哎！hhhhhh')
      },
      handleItemChange(val) {
        console.log('active item:', val);
        setTimeout(_ => {
          if (val.indexOf('江苏') > -1 && !this.options2[0].cities.length) {
            this.options2[0].cities = [{
              label: '南京'
            }];
          } else if (val.indexOf('浙江') > -1 && !this.options2[1].cities.length) {
            this.options2[1].cities = [{
              label: '杭州'
            }];
          }
        }, 300);
      },
      handleChange(value) {
        console.log(value);
      },

    }
}
</script>
<style>
  .bookall {
    width:100%;
    height: 100%;
    background-color: #CCFFCC
  }
  .comment {
    width:1200px;
    height:800px;
    background-color: #CCFFCC
  }
  .bookbody {
    width:100%;
    height: 650px;
    background-color: #CCFFCC
  }
  .el-row {
    margin-bottom: 20px;   
  }
  .el-col {
    border-radius: 4px;
  }
  .bg-purple {
    background: #CCFFCC;
  }
  .grid-content {
    border-radius: 4px;
    height: 380px;
    width: 310px;
  }
  .grid-content img{
    width:450px;
    height: 563px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
</style>
