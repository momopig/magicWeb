<template>
    <div class="detail-page">
       <breadcrumb />
    </div>
</template>
<script>
    import breadcrumb from '@/views/main/components/breadcrumb/index.vue'
    export default {
        components: {
            breadcrumb
        }
    };
</script>
<style lang="less">
    .detail-page{
        width: 980px;
        margin: 0 auto;
    }
</style>
