<template>
    <div class="result-page">
        <ol class="breadcrumb">
            <li class="breadcrumb-item"><a href="/#/intelligence/nav">首页</a></li>
            <li class="breadcrumb-item active">金融知识检索</li>
        </ol>
        <div class="result-content">
            <div class="input-area">
                <div class="result-inputbox">
                    <input type="text" class="input result-input" ref="inputSearch" placeholder="请输入关键字" v-model="query.keyWord">
                    <a v-on:click="getSearchData()" class="result-input-btn iconfont icon-SearchBox" href="javascript: void(0);"></a>
                </div>
            </div>
            <div class="result-body">
                <div class="title">{{this.query.keyWord}}</div>
                <div class="card half">
                    <div class="label">法律或监管规定：</div>
                    <div class="value">
                        <div v-if="index < 3" class="value-item" v-for="(item, index) in searchValues.law.data.datas">
                            <div class="title" v-html="index + 1 + '. ' + emphasizeKey(item.title, query.keyWord)"></div>
                            <div class="content" v-html="emphasizeKey(item.content, query.keyWord)"></div>
                        </div>
                    </div>
                </div>
                <div class="card half">
                    <div class="label">行内制度流程规定：</div>
                    <div class="value">
                        <div  v-if="index < 3" class="value-item" v-for="(item, index) in searchValues.rule.data.datas">
                            <div class="title" v-html="index + 1 + '. ' + emphasizeKey(item.title, query.keyWord)"></div>
                            <div class="content" v-html="emphasizeKey(item.content, query.keyWord)"></div>
                            <div v-if="3 <= index + 1"><span class="search-details">    <...查看详情></span></div>
                        </div>                        
                    </div>
                </div>
                <div class="card ">
                    <div class="label">行内相关业务：</div>
                    <div class="value">
                        <div  v-if="index < 1" class="value-item" v-for="(item, index) in searchValues.business.data.datas">
                            <div class="title" v-html="index + 1 + '. ' + emphasizeKey(item.title, query.keyWord)"></div>
                            <div class="content" v-html="emphasizeKey(item.content, query.keyWord)"></div>
                            <div v-if="1 < searchValues.business.data.datas.length"><span class="search-details">    <...查看详情></span></div>
                        </div>                        
                    </div>
                </div>
                <div class="card ">
                    <div class="label">风险提示：</div>
                    <div class="value">
                        <div  v-if="index < 1" class="value-item" v-for="(item, index) in searchValues.risk.data.datas">
                            <div class="title" v-html="index + 1 + '. ' + emphasizeKey(item.title, query.keyWord)"></div>
                            <div class="content" v-html="emphasizeKey(item.content, query.keyWord)"></div>
                            <div v-if="1 < searchValues.risk.data.datas.length"><span class="search-details">    <...查看详情></span></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>   
    </div>
</template>
<script>
    import intelligenceService from '@/utils/fetchService/intelligence.js' 
    export default {
        components: {
        },
        data() {
            return {
                types: ['law', 'rule', 'business', 'risk', 'extend'],
                seachKeyWord: '',
                query: {
                    offset: 0,
                    count: 5,
                    dataType: 'law',
                    keyWord: ''
                },
                searchValues: {
                    law: {data: {datas: []}},
                    rule: {data: {datas: []}},
                    business: {data: {datas: []}},
                    risk: {data: {datas: []}},
                    extend: {data: {datas: []}}
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
                recommendData: null,
            }
        },
        created() {
            debugger
            this.query.keyWord = this.$route.query.keyWord
        },
        mounted() {
            debugger
            this.getSearchData()
        },
        methods:{
            getSearchData: function(){
                this.types.forEach(type => {
                    this.query.dataType = type
                    intelligenceService.getSearchData(this.query, {
                        callback: (data) => {
                            this.searchValues[type].data = data
                            // if (type === 'law') {
                            //     this.searchValues[type].data.datas.push(data.datas[0])
                            //     this.searchValues[type].data.datas.push(data.datas[0])
                            // }  
                        }
                    })
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


.result-page{
    width: 970px;
    margin: 0 auto;
    .result-content{
        width: 100%;
        margin-top: 10px;
        .input-area {
            background: #fff;
            height: 96px;
            padding: 24px 0 24px 16px;
            text-align: left;
            .result-inputbox{
                position: relative;
                background: #fff;
                width: 720px;
                height: 48px;
                border:1px solid #E3E3E3;
                border-radius: 28px;
                margin-bottom: 40px;
                .result-input{
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
                .result-input-btn{
                    position: absolute;
                    top: 2px;
                    right: 25px;
                    width: 24px;
                    height: 24px;
                    font-size: 30px;
                    color:#999;
                }
            }
        }
        .result-body {
            box-sizing: border-box;
            background: #fff;
            padding: 24px 16px;
            width: 100%;
            margin-top: 10px;
            >.title {
                padding-bottom: 16px;
                border-bottom: 1px solid #F0F2F3;
                font-size: 18px;
                color: #333333;
            }
            .card {
                &.half {
                    display: inline-block;
                    vertical-align: top;
                    width: 464px;
                    >.value {
                        min-height: 220px;
                    }
                }
                >.label {
                    padding: 28px 0;
                    font-size: 14px;
                    color: #333333;
                }
                >.value {
                    box-sizing: border-box;
                    width: 100%;
                    height: 76px;
                    padding: 16px;
                    border: 1px solid #E3E3E3;

                    overflow: hidden;
                    >.value-item {
                        margin-bottom: 10px;
                        >.title {
                            font-weight: bold;
                        }
                    }
                    .strong {
                        color: #E25555
                    }
                    .search-details {
                        color: #E25555;
                        cursor: pointer;
                    }
                }
            }
        }
    }
}

</style>
