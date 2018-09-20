<template>
    <div class="result-page">
        <breadcrumb />
        <div class="result-content">
            <div class="result-body">
                <div class="title">{{this.query.keyWord}}</div>
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
                    law: {data: {datas: []}},
                    rule: {data: {datas: []}},
                    business: {data: {datas: []}},
                    risk: {data: {datas: []}},
                    extend: {data: {datas: []}}
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
            .strong {
                color: #E25555
            }

        }
    }
}

</style>
