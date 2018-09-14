<template>
    <div class="nav">
        search
    </div>
</template>
<script>
    import intelligenceService from '@/utils/fetchService/intelligence.js' 
    export default {
        components: {
        },
        data() {
            return {
                query: {
                    offset: 0,
                    count: 5
                }
            }
        },
        created() {
            intelligenceService.getHotList(this.query, {
                callback: (data) => {
                    debugger
                    _this.currentTemplate = data
                }
            })
        },
    };
</script>
<style lang="less">
</style>
