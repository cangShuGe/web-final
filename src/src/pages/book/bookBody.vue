<template>
  <div id="bookbody" class="bookall">
    <div class ="bookbody" style="padding: 100px;">
        <el-row ><!--列和列之间的间距--> <!--一行但是有很多列-->
            <el-col :span="11">
                <div class="grid-content bg-purple">
                    <img src="@/assets/img/linghundemuchang.jpg" alt="书籍封面">
                </div>
            </el-col>
            <el-col :span="2">
                <div class="grid-content bg-purple">
                </div>
            </el-col>
            <el-col :span="11" :gutter="40">
                <div class="grid-content bg-purple">

                  <el-row>
                    <el-col >
                      <div class="grid-content bg-purple">
                        <b>书籍名称</b>
                        <el-tag>灵魂的牧场</el-tag>
                      </div>
                    </el-col>
                  </el-row>

                  <el-row>
                    <el-col >
                      <div class="grid-content bg-purple">
                        <b>作者</b>
                        <el-tag type="success">倪道辉</el-tag>
                      </div>
                    </el-col>
                  </el-row>

                  <el-row>
                    <el-col >
                      <div class="grid-content bg-purple">
                        <b>出版社</b>
                        <el-tag type="info">asdfasdfsdf</el-tag>
                      </div>
                    </el-col>
                  </el-row>

                  <el-row>
                    <el-col >
                      <div class="grid-content bg-purple">
                        <b>出版时间</b>
                        <el-tag type="info">2016-12-23</el-tag>
                      </div>
                    </el-col>
                  </el-row>

                  <el-row>
                    <el-col >
                      <div class="grid-content bg-purple">
                        <b>抵押金币</b>
                        <el-switch v-model="form.discord"></el-switch>
                        <el-tag type="danger"> <i class="el-icon-star-off"></i>注：使用金币可抵押2%的费用</el-tag>
                      </div>
                    </el-col>
                  </el-row>

                  <!-- <el-row>
                    <el-col >
                      <div class="grid-content bg-purple">
                      </div>
                    </el-col>
                  </el-row> -->


                  <el-row>
                    <el-col >
                      <div class="grid-content bg-purple">
                        <b>配送至</b>
                        <el-cascader
                            :options="options2"
                            @active-item-change="handleItemChange"
                            :props="props"
                        ></el-cascader>
                        </div>
                    </el-col>
                  </el-row>

                  <el-row>
                    <el-col >
                      <div class="grid-content bg-purple">
                      </div>
                    </el-col>
                  </el-row>

                  <el-row>
                    <el-col >
                      <div class="grid-content bg-purple">
                        <b>详细地址</b>
                        <el-input type="textarea" v-model="form.address" style="width: 250px;height: 50px"></el-input>
                        </div>
                    </el-col>
                  </el-row>

                  <el-row>
                    <el-col >
                      <div class="grid-content bg-purple">
                      </div>
                    </el-col>
                  </el-row>

                  <el-row>
                    <el-col >
                      <div class="grid-content bg-purple">
                        <b>购买数量</b>
                        <el-input-number v-model="form.num1" @change="handleChange" :min="1" :max="10" size="small"></el-input-number>
                      </div>
                    </el-col>
                  </el-row>
                  <el-row>
                    <el-col >
                      <div class="grid-content bg-purple">
                      </div>
                    </el-col>
                  </el-row>

                  <el-row>
                    <el-col >
                      <div class="grid-content bg-purple">
                        <b>购买数量</b>
                        <el-button type="primary" @click="onSubmit">立即购买</el-button>
                        <el-button type="primary" @click="toCart">加入购物车</el-button>
                      </div>
                    </el-col>
                  </el-row>
                </div>
            </el-col>
        </el-row>


        <br>
        <br>
        <br>
    <!--</div>
      <el-row :gutter="12">-->
            <!-- table -->
            <!--<el-col :span="12"><my-table></my-table></el-col>
      </el-row>
    <div> --><!--展示这本书籍的所有评论以及评分-->
    </div>
    <div class="comment" >
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
    background-color: rgba(255, 255, 255, 0.8)
  }
  .comment {
    width:1200px;
    height:800px;
    background-color: rgba(255, 255, 255, 0.8)
  }
  .bookbody {
    width:100%;
    height: 650px;
    background-color: rgba(255, 255, 255, 0.8)
  }
  .el-row {
    margin-bottom: 2px;
  }
  .el-col {
    border-radius: 4px;
  }
  .bg-purple {
    background: rgba(255, 255, 255, 0.8);
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .grid-content1 {
    border-radius: 4px;
    min-height: 36px;
  }
  .grid-content img{
    width:100%;
    height: 100%
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
  el-row {
    margin-bottom: 20px;
    padding: 10px 0;
  }
</style>
