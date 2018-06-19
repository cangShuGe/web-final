<template>
    <div id="banner">
        {{message}}
        <el-carousel type="card" height="250px" trigger="click" :interval="4000">
            <el-carousel-item>
                <div class="item-content">
                    <img src="~@/assets/img/echo.jpg">
                    <div class="title" target="_blank">灵魂的牧场</div>
                </div>
            </el-carousel-item>
            <el-carousel-item>
                <div class="item-content">
                    <img src="~@/assets/img/health.gif">
                    <div class="title" target="_blank">Three</div>
                </div>
            </el-carousel-item>
            <el-carousel-item>
                <div class="item-content">
                    <img src="~@/assets/img/toutiao.jpg">
                    <div class="title" target="_blank">漂</div>
                </div>
            </el-carousel-item>
        </el-carousel>
    </div>
</template>
<script>
import router from '@/router'
export default {
    name: 'banner',
    props:['message']
    // before
}
</script>
<style lang='stylus'>
#banner {
    .el-carousel {
        margin-bottom: 25px;
        .el-carousel__item {
            .item-content {
                width: 100%;
                height: 100%;
                img {
                    width: 100%;
                }
                .title {
                    position: absolute;
                    bottom: 0;
                    left: 0;
                    width: 100%;
                    height: 30px;
                    line-height: 30px;
                    font-size: 14px;
                    color: #fff;
                    text-align: center;
                    background-color: rgba(0, 0, 0, 0.3);
                    &:hover {
                        color: appColor;
                    }
                }
            }
        }
    }
}
</style>
