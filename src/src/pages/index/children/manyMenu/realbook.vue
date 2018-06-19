<template>
    <div id="realbook">
        <my-banner :message="realBook.kind"></my-banner>
       <my-card></my-card>
    </div>
</template>
<script>
import myBanner from './children/banner'
import myCard from './children/card'
import { mapState } from 'vuex'
export default {
    name: 'realbook',
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
    components:{myBanner,myCard},
    data() {
        return {
        }
    }
}
</script>
<style lang='stylus'>
#example {}
</style>
