<template>
    <div class="main">
        <common-header />
        <div class="single-page-con">
            <div class="single-page">
                <keep-alive>
                    <router-view></router-view>
                </keep-alive>
            </div>
        </div>
    </div>
</template>
<script>
    import commonHeader from '@/views/header/index.vue'
    import util from '@/libs/util.js';
    
    export default {
        components: {
            commonHeader
        }
    };
</script>
<style lang="less">
</style>