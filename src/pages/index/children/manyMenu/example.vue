<template>
    <div id="example">
        <my-banner :message="Ebook.kind"></my-banner>
        <my-card></my-card>
    </div>
</template>
<script>
import myBanner from './children/banner'
import myCard from './children/card'
import { mapState } from 'vuex'
export default {
    name: 'example',
    computed:{
        ...mapState([
            'user',
            'logs',
            'useronline',
            'kinds',
            'Ebook'
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
