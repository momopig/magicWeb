<style lang="less">
</style>
<template>
    <div class="main" :class="{'main-hide-text': shrink}">
        <div class="single-page-con" :style="{left: shrink?'60px':'200px'}">
            <div class="single-page">
                <keep-alive :include="cachePage">
                    <router-view></router-view>
                </keep-alive>
            </div>
        </div>
    </div>
</template>
<script>
    import util from '@/libs/util.js';
    
    export default {
        components: {
        }
    };
</script>
