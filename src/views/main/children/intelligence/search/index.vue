<template>
    <div class="search-page">
        <ol class="breadcrumb">
            <li class="breadcrumb-item"><a href="/#/intelligence/nav">首页</a></li>
            <li class="breadcrumb-item active">金融知识检索</li>
        </ol>
        <div class="search-content">
            <div class="search-inputbox">
                <input type="text" class="input search-input" id="" placeholder="请输入关键字">
                <a class="search-input-btn iconfont icon-SearchBox" href="javascript: void(0);"></a>
            </div>
            <hz-table class="historyTable" v-if="historyOptions.show" :options="historyOptions"/>
            <hz-table class="hotpointTable" v-if="hotpointOptions.show" :options="hotpointOptions"/>
        </div>   
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
                    title: '历史查询内容',
                    show: false,
                    headers: [
                        {name: 'id', label: '序号'},
                        {name: 'keyWord', label: '标题'},
                        {name: 'queryTimeAlias', label: '查询时间'}
                    ]
                },
                hotpointOptions: {
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
            intelligenceService.getHistoryList(this.query, {
                callback: (a) => {

                    this.historyOptions.rows = a.historyData
                    this.historyOptions.show = true
                }
            });
            intelligenceService.getHotList(this.query, {
                callback: (data) => {        
                    this.hotpointOptions.rows = data.hotData
                    this.hotpointOptions.show = true
                }
            })
        },
        methods:{
    


        }
    };
</script>
<style lang="less">
.breadcrumb{
    margin: 24px 0 16px;
    list-style: none;
    font-size: 12px;
    .breadcrumb-item{
        color: #BDBDBD;
        a{
            color: #BDBDBD;
        }
        display: inline-block;
        &:after{
            content: " > ";
        }
        &:last-child{
            color: #767676;
            &:after{
                content: "";
            }
        }
    }
}

.search-inputbox{
    position: relative;
    width: 720px;
    height: 48px;
    background-color: #fff;
    border:1px solid #E3E3E3;
    border-radius: 28px;
    margin: 0 auto;
    margin-bottom: 40px;
    .search-input{
        display: block;
        position: absolute;
        top:12px;
        left: 30px;
        width: 630px;
        height: 24px;
        border:none;
        outline: medium;
        font-size: 16px;
        &::-webkit-input-placeholder{
            color: #BDBDBD;
        }
        &:-moz-placeholder{
            color: #BDBDBD;
        }
        &:-moz-placeholder{
            color: #BDBDBD;
        }
        &:-ms-input-placeholder{
            color: #BDBDBD;
        }
    }
    .search-input-btn{
        position: absolute;
        top: 10px;
        right: 20px;
        width: 24px;
        height: 24px;
        background: #767676
    }
}
.search-page{
    width: 970px;
    margin: 0 auto;
    .search-content{
        width: 100%;
        min-height: 776px;
        padding-top: 58px;
        margin-top: 10px;
        background-color: #fff;
        .hz-table {
            width: 720px;
            margin: 18px auto;
            padding-bottom: 18px;
            .title{
                width: 100%;
                height: 42px;
                padding: 10px 16px;
                border-bottom: 1px solid #F0F2F3;
                margin-bottom: 16px;
                font-size: 18px;
                line-height: 21px;
            }
            table{
                width: 100%;
                border-collapse:collapse;
                font-size: 12px;
                th,td{
                    height: 36px;
                    box-sizing: border-box;
                    padding-left:16px;
                    border: 1px solid #EEF1F5;
                }
                th{
                    background: #F7F7F7;
                    text-align: left;
                    color: #999;
                }
                tr:hover{
                    background-color:rgba(226,85,85,0.1);
                }
            }
        }
    }
}

</style>
