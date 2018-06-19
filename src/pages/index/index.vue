<template>
    <div id="index">
        <el-container id="verContainer" direction="vertical">
            <!-- header -->
            <my-header></my-header>
            <el-container id="horContainer" direction="horizontal">
                <!-- Side> -->
                <my-side></my-side>
                <!-- Main -->
                <el-main id="main">
                    <transition name="el-fade-in-linear" mode="out-in">
                        <router-view></router-view>
                    </transition>
                </el-main>
            </el-container>
        </el-container>
    </div>
</template>
<script>
import myHeader from '@/layout/header'
import mySide from '@/layout/side'
import Connect from '@/services/service'
export default {
    name: 'index',
    components: { myHeader, mySide },
    created:function(){
        // var connect = new Connect()
        // var data = connect.getKindsRequest()
        // if(data.status === false){
        //     console.log(data.message)
        // }else{
        //     this.$store.dispatch('set_kinds',data.data)
        // }
        // this.$store.dispatch('set_kinds','sdfsdf')
        // this.$store.commit('set_kinds',['1','2','3'])
        this.$store.commit('set_RealBook',['00001','玄幻'])
    }

}
</script>
<style lang='stylus'>
#index {
    position: relative;
    width: 100%;
    height: 100%;
    #verContainer {
        height: 100%;
        #horContainer {
            height: 100%;
            #main {
                position: relative;
                width: 100%;
                height: fit-content;
                min-height: 100%;
                background: #fff;
                overflow: inherit;
            }
        }
    }
}
</style>
