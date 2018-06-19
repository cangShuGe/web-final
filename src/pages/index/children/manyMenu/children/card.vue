<template>
    <div id="card">
        <el-row  :gutter="20">
            <el-col :span="6" v-for="(item,index) in list" :key="index" >
                <div @click="ChangeView" class="grid-content bg-purple">
                    <img :src="item.icon" alt="书籍封面">
                    <div style="padding: 14px; text-align: center">
                        <span>{{item.title}}</span>
                    </div>
                </div>
            </el-col>
        </el-row>
    </div>
</template>
<script>
export default {
    name: 'card',
    data() {
        return {
            list: [
                {
                    icon: this.$store.state.url1,
                    title: '红楼梦'
                },
                {
                    icon: this.$store.state.url2,
                    title: '漂',
                },
                {
                    icon: this.$store.state.url3,
                    title: '水浒传',
                },
                {
                    icon: this.$store.state.url4,
                    title: '活着',
                }
            ]
        }
    },
    methods:{
      ChangeView(){
        this.$router.push({name : 'bookBody'})
      }
    }
}
</script>
<style>
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .grid-content img{
    width:100%;
    height: 100%;
  }
</style>
<style lang='stylus'>
color1 = #55c8ca
color2 = #f7b87f
color3 = #36a3f7
color4 = #34bfa3
#card {
    .count{
        padding: 20px;
        .count-item{
            user-select: none;
            margin-bottom: 32px;
            .item-container{
                display: flex;
                justify-content: space-between;
                align-items: center;
                padding: 16px 20px;
                background-color: #f3f4f5;
                border-radius: 6px;
                cursor: pointer;
                &:hover{
                    opacity: 0.8;
                }
                &.item-container-1{
                    background: color1;
                }
                &.item-container-2{
                    background: color2;
                }
                &.item-container-3{
                    background: color3;
                }
                &.item-container-4{
                    background: color4;
                }
                .icon{
                    padding: 16px;
                    border-radius: 6px;
                    cursor: pointer;
                    transition: all 0.3s ease-out;
                    i{
                        font-size: 48px;
                        color: #fff;
                    }
                }
                .text{
                    text-align: right;
                    color: #fff;
                    .title{
                        font-size: 16px;
                        margin-bottom: 12px;
                    }
                    .number{
                        font-size: 20px;
                    }
                }
            }
        }
    }
}
</style>
