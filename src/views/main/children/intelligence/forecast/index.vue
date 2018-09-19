<template>
    <div class="forecast-page">
        <div class="bread"></div>
        <div class="main-content">
            <div class="description">
                以流动性风险管理新规为例，2018年5月25日，商业银行流动性风险管理办法正式亮相，并自2018年7月1日起施行。
                整体而言，流动性新规对商业银行流动性风险的指标要求分为两大层面，即<span class="strong">监管指标</span>和<span class="strong">监测指标</span>。
            </div>
            <div class="tab-list">
                <div class="tab-item active">
                    <div class="title">流动性覆盖率</div>
                    <line-chart :options="pieOptions" />
                </div>
                <div class="tab-item">
                    <div class="title">流动性覆盖率</div>
                    <line-chart :options="pieOptions" />
                </div>
                <div class="tab-item">
                    <div class="title">流动性覆盖率</div>
                    <line-chart :options="pieOptions" />
                </div>
                <div class="tab-item">
                    <div class="title">流动性覆盖率</div>
                    <line-chart :options="pieOptions" />
                </div>
                <div class="tab-item">
                    <div class="title">流动性覆盖率</div>
                    <line-chart :options="pieOptions" />
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
                        data: ['2017/8/1','2017/8/2','2017/8/3','2017/8/4','2017/8/5','2017/8/6','2017/8/7'],
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
                            
                            color: '#82C1F4',
                            data:[0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7]
                        },
                        {
                            name:'趋势预测',
                            type:'line',
                            
                            color: '#FFAA1E',
                            data:[0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8]
                        },
                        {
                            name:'置信下限',
                            type:'line',
                            
                            color: '#00BBCA',
                            data:[0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9]
                        },
                        {
                            name:'监管要求（不低于）',
                            type:'line',
                            
                            color: '#FF8080',
                            data:[0.25, 0.25, 0.25, 0.25, 0.25]
                        },
                        {
                            name:'LCR（流动性覆盖率）',
                            type:'line',
                            
                            color: '#4F98EA',
                            data:[0.7, 0.8, 0.9, 1, 1.2, 1.6, 1.8]
                        }
                    ]
                }
            return {
                currentTab: 'liquidityCoverage',

                pieOptions: {
                    series: [
                        {
                            name:'访问来源',
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
                                {value: 1, name:'50%', backgroundColor: '#82C1F4'},
                            ]
                        }
                    ]
                },

                chartsOptions: {
                    liquidityCoverage: {
                        name: '流动性覆盖率',
                        rate: '100%',
                        lineChartOptions: polar
                    },
                    netStableFundRatio: {
                        name: '净稳定资金比例',
                        rate: '100%',
                        lineChartOptions: {
                        }
                    },
                    liquidityRatio: {
                        name: '流动性比例',
                        rate: '100%',
                        lineChartOptions: {
                        }
                    },
                    liquidityMatchingRate: {
                        name: '流动匹配率',
                        rate: '100%',
                        lineChartOptions: {
                        }
                    },
                    liquidityAssetAdequacyRatio: {
                        name: '质流动性资产充足率',
                        rate: '100%',
                        lineChartOptions: {
                        }
                    },                                                            
                }
            }
        },
        created() {
            Promise.all([            intelligenceService.getPrediction({type: 'liquidityCoverage'}, {
                callback: (a) => {
                    debugger
                    // this.historyOptions.rows = a.historyData
                    // this.historyOptions.show = true
                }
            })]).then(values => { 
                debugger
                 console.log(values);
}).catch(reason => { 
  console.log(reason)
});

        }
    };
</script>
<style lang="less">
    .forecast-page {
        width: 980px;
        margin: 0 auto;
        .main-content {
            background: #fff;
            padding: 16px 24px 0 16px;
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
