
<template>
    <div class="common-header">
        <a href="/#/intelligence"><img :src="imgUrl" class="systemlogo"></a>
    </div>
</template>
<style lang="less">
    .common-header {
        width: 100%;
        height: 56px;
        margin-bottom: 4px;
        background-color: #fff;
        box-shadow:0px 2px 4px rgba(0, 0, 0, 0.2);
        .systemlogo{
            width: 344px;
            height: 38px;
            margin: 9px 6px;
        }
    }
</style>
<script>
    export default {
        name: 'header',
        data () {
            return {
                imgUrl:""
            };
        },
        computed: {

        },
        methods: {

        },
        watch: {

        },
        mounted () {
        },
        created () {
            this.imgUrl = require("@/views/main/components/header/img/systemLogo.png")
        }
    };
</script>

