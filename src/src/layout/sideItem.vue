<template>
    <div class="menuItem">
        <el-menu default-active="3-1" class="el-menu-vertical-demo">
            <el-submenu index="1">
                <template slot="title">
                  <span slot="title">实体书分类</span>
                </template>
                <!-- <el-menu-item-group > -->
                    <div>
                        <!-- <router-link  :to="{name:path}" > -->
                            <el-menu-item v-for="(name,id,index) in kinds" :key="index" :index="'1'+'-' + index" @click="choseRealBook(name,id)">
                            {{name}}
                            </el-menu-item>
                        <!-- </router-link> -->
                    </div>
                <!-- </el-menu-item-group> -->
            </el-submenu>
            <el-menu-item index="2">
              <span slot="title">二手书</span>
            </el-menu-item>
            <el-submenu index="3">
              <span slot="title">电子书</span>
                <div v-for="(name,id,index) in kinds" :key="index">
                <el-menu-item :index="'120'+'-' + index" @click="choseBook(id,name)">
                    {{name}}
                </el-menu-item>
                </div>
            </el-submenu>
        </el-menu>
    </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
    name: 'menuItem',
    data(){
        return {

        };
    },
    props: {
        json: Array
    },
    created:function(){
        // this.$store.dispatch('set_kinds',['1','2','3','4'])
        // alert(kinds)
        // window.alert('sdfsdf')
    },
    computed: {
        ...mapState([
            'user',
            'logs',
            'useronline',
            'kinds'
        ])
    },
    methods: {
        routeName(route) {
            if (route.meta && route.meta.title) {
                return route.meta.title
            } else {
                return route.name
            }
        },
        kindName(){

        },
        choseBook(id,name){
            let ebook = new Array(id,name)
            this.$store.commit('set_Ebook',ebook)
            this.$router.push({path:'/index/ebook/'+name})
        },
        choseRealBook(name,id){
            let real = new Array(id,name)
            this.$store.commit('set_RealBook',real)
            this.$router.push({path:'/index/realbook/'+name})
        }
    }
}
</script>
<style lang='stylus'>
.el-menu-vertical-demo:not(.el-menu--collapse) {
    a {
        display: block;
    }
  }
.menuItem {
    a {
        display: block;
    }
}
</style>
