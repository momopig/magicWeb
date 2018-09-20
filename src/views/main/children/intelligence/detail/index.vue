<template>
    <div class="detail-page">
        <ol class="breadcrumb">
            <li class="breadcrumb-item">
                <a href="/#/">首页</a>
            </li>
            <li class="breadcrumb-item">
                <a :href="'/#/intelligence/result?keyWord=' + query.keyWord">金融知识检索</a>
            </li>
            <li class="breadcrumb-item">
                <a href="javascript:void(0)">详情</a>
            </li>
        </ol>
        <div class="detail-content">
            <div class="detail-body">
                <div class="title">{{this.searchValues[this.query.dataType].name}}</div>
                <div v-if="show" class="value-item" v-for="(item, index) in searchValues[query.dataType].data.datas">
                    <div class="title" v-html="index + 1 + '. ' + emphasizeKey(item.title, query.keyWord)"></div>
                    <div class="content" v-html="emphasizeKey(item.content, query.keyWord)"></div>
                </div>
            </div>
        </div>   
    </div>
</template>
<script>
    import breadcrumb from '@/views/main/components/breadcrumb/index.vue'
    import intelligenceService from '@/utils/fetchService/intelligence.js' 
    export default {
        components: {
            breadcrumb
        },
        data() {
            return {
                types: ['law', 'rule', 'business', 'risk', 'extend'],
                seachKeyWord: '',
                show: false,
                query: {
                    offset: 0,
                    count: 5,
                    dataType: '',
                    keyWord: ''
                },
                searchValues: {
                    law: {name: '法律或监管规定：', data: {datas: []}},
                    rule: {name: '行内制度流程规定：', data: {datas: []}},
                    business: {name: '行内相关业务：', data: {datas: []}},
                    risk: {name: '风险提示：', data: {datas: []}},
                    extend: {name: '', data: {datas: []}}
                }
            }
        },
        created() {
            this.query.keyWord = this.$route.query.keyWord
            this.query.dataType = this.$route.query.type
        },
        mounted() {
            this.getSearchData()
        },
        methods:{
            getSearchData: function() {
                    const _this = this
                    intelligenceService.getSearchData(this.query, {
                        callback: (data) => {
                            this.searchValues[this.query.dataType].data = data
                            _this.show = true
                            // if (type === 'law') {
                            //     this.searchValues[type].data.datas.push(data.datas[0])
                            //     this.searchValues[type].data.datas.push(data.datas[0])
                            // }  
                        }
                    })
            },
            emphasizeKey(string, key) {
                var reg = new RegExp(key, "g");
                return string.replace(reg, '<span class="strong">' + key + '</span>')
            }
        }
    };
</script>
<style lang="less">
.breadcrumb{
    margin: 24px 0 16px;
    list-style: none;
    font-size: 12px;
    .breadcrumb-item{
        a{
            color:#BDBDBD;
        }
        color: #BDBDBD;
        display: inline-block;
        &:after{
            content: " > ";
        }
        &:last-child{
            color: #767676;
            &:after{
                content: "";
            }
            a{
                color:#767676;
                cursor:auto;
            }
        }
    }
}
.detail-page{
    width: 970px;
    margin: 0 auto;
    .detail-content{
        width: 100%;
        margin-top: 10px;
        .detail-body {
            box-sizing: border-box;
            background: #fff;
            padding: 24px 16px;
            width: 100%;
            min-height: 500px;
            margin-top: 10px;

            >.title {
                padding-bottom: 16px;
                border-bottom: 1px solid #F0F2F3;
                font-size: 18px;
                color: #333333;
            }
            .value-item {
                margin-top: 12px;
            }
        }
    }
    .strong {
        color: #E25555
    }
}


</style>
