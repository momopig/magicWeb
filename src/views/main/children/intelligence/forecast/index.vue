<template>
    <div class="forecast-page">
        <div class="bread"></div>
        <div class="main-content">
            <div class="description">
                以流动性风险管理新规为例，2018年5月25日，商业银行流动性风险管理办法正式亮相，并自2018年7月1日起施行。
                整体而言，流动性新规对商业银行流动性风险的指标要求分为两大层面，即<span class="strong">监管指标</span>和<span class="strong">监测指标</span>。
            </div>
            <div class="tab-list" v-if="showTabs">
                <div v-bind:class="{'tab-item': true, 'active': key === currentTab}" v-for="(item, key) in chartsOptions" @click="selectTab(key)">
                    <div class="title">{{ item.name }}</div>
                    <line-chart :options="item.pieOptions" />
                </div>
            </div>
            <div class="line-chart">
                <line-chart :options="chartsOptions[currentTab].lineChartOptions" />
            </div>
        </div>
    </div>
</template>
<script>
    import LineChart from './components/lineChart/index.vue'
    import intelligenceService from '@/utils/fetchService/intelligence.js' 
    import Promise from 'es6-promise'

    export default {
        props: {

        },
        components: {
            LineChart
        },
        data() {
            var polar = {
                    title: {
                    },
                    tooltip: {
                        trigger: 'axis'
                    },
                    legend: {
                        data:['置信上限','趋势预测','置信下限','监管要求（不低于）','LCR（流动性覆盖率）']
                    },
                    grid: {
                        left: '3%',
                        right: '4%',
                        bottom: '3%',
                        containLabel: true
                    },
                    toolbox: {
                        feature: {
                            saveAsImage: {}
                        }
                    },
                    xAxis: {
                        type: 'category',
                        boundaryGap: false,
                        data: [],
                        axisLabel: {
                            rotate: 90
                        },
                    },
                    yAxis: {
                        type: 'value',
                        // min: 0,
                        // max: 1.6,
                        interval: 0.2,
                        axisLabel: {
                            show: true,
                            interval: 'auto',
                            formatter: function (value, idx) {
                                return value * 100 + '%';
                            }
                            },
                    },
                    series: [
                        {
                            name:'置信上限',
                            type:'line',
                            en: 'highLimit',
                            color: '#82C1F4',
                            data:[]
                        },
                        {
                            name:'趋势预测',
                            type:'line',
                            en: 'trend',
                            color: '#FFAA1E',
                            data:[]
                        },
                        {
                            name:'置信下限',
                            type:'line',
                            en: 'lowLimit',
                            color: '#00BBCA',
                            data:[]
                        },
                        {
                            name:'监管要求（不低于）',
                            type:'line',
                            en: 'standard',
                            color: '#FF8080',
                            data:[]
                        },
                        {
                            name:'LCR（流动性覆盖率）',
                            type:'line',
                             en: 'fact',
                            color: '#4F98EA',
                            data:[]
                        }
                    ]
                }
            const pieOptions = {
                    series: [
                        {
                            type:'pie',
                            radius: ['80%', '100%'],
                            avoidLabelOverlap: false,
                            label: {
                                normal: {
                                    show: true,
                                    fontSize: '18',
                                    color: '#666666',
                                    position: 'center'
                                }
                            },
                            data:[
                                {value: 0, name:'0%',
                                    itemStyle: {
                                        normal: {
                                            color: ''
                                        }
                                    }
                                },
                                {value: 1,
                                    itemStyle: {
                                        normal: {
                                            color: '#F0F2F3'
                                        }
                                    }
                                },
                            ]
                        }
                    ]
                }
            return {
                showTabs: false,
                currentTab: 'liquidityCoverage',
                chartsOptions: {
                    liquidityCoverage: {
                        name: '流动性覆盖率',
                        rate: '100%',
                        color: '#3391FF',
                        pieOptions: JSON.parse(JSON.stringify(pieOptions)),
                        lineChartOptions: JSON.parse(JSON.stringify(polar))
                    },
                    netStableFundRatio: {
                        name: '净稳定资金比例',
                        rate: '100%',
                        color: '#FFAA1E',
                        pieOptions: JSON.parse(JSON.stringify(pieOptions)),
                        lineChartOptions: JSON.parse(JSON.stringify(polar))
                    },
                    liquidityRatio: {
                        name: '流动性比例',
                        rate: '100%',
                        color: '#FF8080',
                        pieOptions: JSON.parse(JSON.stringify(pieOptions)),
                        lineChartOptions: JSON.parse(JSON.stringify(polar))
                    },
                    liquidityMatchingRate: {
                        name: '流动匹配率',
                        rate: '100%',
                        color: '#00BBCA',
                        pieOptions: JSON.parse(JSON.stringify(pieOptions)),
                        lineChartOptions: JSON.parse(JSON.stringify(polar))
                    },
                    liquidityAssetAdequacyRatio: {
                        name: '质流动性资产充足率',
                        rate: '100%',
                        color: '#82C1F4',
                        pieOptions: JSON.parse(JSON.stringify(pieOptions)),                       
                        lineChartOptions: JSON.parse(JSON.stringify(polar))
                    },                                                            
                }
            }
        },
        created() {
            var types = ['liquidityCoverage', 'netStableFundRatio', 'liquidityRatio', 'liquidityMatchingRate', 'liquidityAssetAdequacyRatio']
            const _this = this
            for (var key in this.chartsOptions) {
                let lineObject = this.chartsOptions[key]
                lineObject.pieOptions.series[0].data[0].itemStyle.normal.color = lineObject.color
            }
            Promise.all(types.map(type => {
                return intelligenceService.getPrediction({type: type}, {
                    callback: (data) => {
                        if (data) {
                            data.type = type
                        }
                        return data
                        // this.historyOptions.rows = data.historyData
                        // this.historyOptions.show = true
                    }
                })
            })).then(values => {
                values.forEach((item, index) => {
                    if (!item) {
                        return
                    }
                    const lineObject = _this.chartsOptions[item.type]
                    lineObject.rate = item.rate
                    lineObject.pieOptions.series[0].data[0].value = lineObject.rate
                    lineObject.pieOptions.series[0].data[0].name = lineObject.rate * 100 + '%'
                    lineObject.pieOptions.series[0].data[1].value = 1 - lineObject.rate
                    item.predictions.forEach((dateItem) => {
                        lineObject.lineChartOptions.xAxis.data.push(dateItem.staticDate)
                        lineObject.lineChartOptions.series.forEach(lineItem => {
                            lineItem.data.push(dateItem[lineItem.en])
                        })
                    })
                })
                _this.showTabs = true
            }).catch(reason => { 
            console.log(reason)
            })

        },
        mounted() {
            this.$forceUpdate()
        },
        methods: {
            selectTab(key) {
                this.currentTab = key
                console.log(this.chartsOptions[key].lineChartOptions)
            }
        }
    };
</script>
<style lang="less">
    .forecast-page {
        width: 980px;
        margin: 0 auto;
        .main-content {
            background: #fff;
            padding: 16px 24px 16px 16px;
            overflow: auto;
            .description {
                margin-bottom: 40px;
                font-size: 14px;
                color: #666666;
                .strong {
                    color: #E25555;
                }
            }
            .tab-list {
                display: inline-block;
                .tab-item {
                    position: relative;
                    float: left;
                    box-sizing: border-box;
                    width: 180px;
                    height: 198px;
                    padding: 16px 0 0 16px;
                    border: 1px solid #E3E3E3;
                    margin-right: 10px;

                    cursor: pointer;
                    .title {
                        color: #333333;
                        font-size: 12px;
                    }
                    .echarts {
                        position: absolute;
                        right: 0;
                        bottom: 16px;
                        left: 0;
                        width: 130px;
                        height: 130px;
                        margin: 0 auto;
                    }
                    &:nth-last-child(1) {
                        margin-right: 0px;
                    }
                    &:hover, &.active {
                        &:after {
                            position: absolute;
                            left: 0;
                            right: 0;
                            bottom: -36px;
                            display: block;
                            background: #fff;
                            width: 18px;
                            height: 18px;
                            margin: 0 auto;
                            content: '';
                            border-top: 1px solid;
                            border-right: 1px solid;
                            border-color: #E3E3E3;
                            transform: rotate(-45deg)

                        }
                    }
                }
            }
            .line-chart {
                margin-top: 20px;
                padding-top: 16px;
                border: 1px solid #E3E3E3;
                .echarts {
                    width: 100%;
                }
            }

        }
    }
</style>
