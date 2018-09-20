<template>
<v-chart :options="options"/>
</template>
 
<style>

</style>
 
<script>
import ECharts from 'vue-echarts/components/ECharts'
import 'echarts/lib/chart/line'
// import 'echarts/lib/chart/pie'
// import 'echarts/lib/component/polar'
 
export default {
  props: {
      options: {
          type: Object,
          default: ()=>{}
      }
  },
  components: {
    chart: ECharts
  },
  data: function () {
    return {
      polar: {
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
    }
  }
}
</script>