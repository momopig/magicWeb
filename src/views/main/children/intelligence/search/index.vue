<template>
    <div class="search-page">
        <hz-table v-if="historyOptions.show" :options="historyOptions"/>
    </div>
</template>
<script>
    import intelligenceService from '@/utils/fetchService/intelligence.js' 
    import hzTable from '@/components/hz/hz-table/index.vue' 
    export default {
        components: {
            hzTable
        },
        data() {
            return {
                query: {
                    offset: 0,
                    count: 5
                },
                historyOptions: {
                    title: '热门推荐',
                    show: false,
                    headers: [
                        {name: 'id', label: '序号'},
                        {name: 'keyWord', label: '热点'},
                        {name: 'heat', label: '热度'}
                    ]
                },
                recommendData: null
            }
        },
        created() {
            intelligenceService.getHotList(this.query, {
                callback: (data) => {
                    this.historyOptions.rows = data.hotData
                    this.historyOptions.show = true
                }
            })
        }
    };
</script>
<style lang="less">

</style>
