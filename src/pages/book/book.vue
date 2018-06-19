<template>
    <div id="book">
        <el-container id="verContainer" direction="vertical">
            <!-- header -->
            <my-header></my-header>
            <el-container id="horContainer" direction="vertical">
                <my-bookbody></my-bookbody>
                <!--<my-table></my-table>-->
            </el-container>
        </el-container>
    </div>
</template>
<script>
import myHeader from '@/layout/header'
import myBanner from '@/pages/index/children/manyMenu/children/banner'
import myCard from '@/pages/index/children/manyMenu/children/card'
import myBookbody from '@/pages/book/bookBody'
import { mapState } from 'vuex'
export default {
    name: 'book',
    computed:{
        ...mapState([
            'user',
            'logs',
            'useronline',
            'kinds',
            'Ebook',
            'realBook'
        ])
    },
    components:{myHeader,myBanner,myCard,myBookbody},
    data() {
        return {
        }
    }
}
</script>
<style lang='stylus'>
#example {}
</style>
