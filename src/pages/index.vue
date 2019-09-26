<style lang="less" scoped>
 #myChart{
   width: 650px;
   height: 650px;
   margin: -50px auto 0;
 }
</style>
<template>
    <div class="page">
        <div id="myChart"></div>
        <!-- <el-table
      :data="tableData"
      style="width: 100%">
      <el-table-column
        prop="date"
        label="日期"
        width="180">
      </el-table-column>
      <el-table-column
        prop="name"
        label="姓名"
        width="180">
      </el-table-column>
      <el-table-column
        prop="address"
        label="地址">
      </el-table-column>
    </el-table> -->
		</div>
</template>
<script>
export default {
	data(){
		return{
      tableData: [],
      mapData: {}
		};
	},
  mounted(){
    // this.init()
    // this.drawLine();
    this.getMap();
  },
	methods:{
		async init() {
      const res = await this.$http.get('/usertables', {})
      this.tableData = res.response
    },
    async getMap() {
      const res = await this.$http.get('/map', {})
      this.mapData = res.response.data
      this.drawLine();
    },
    drawLine(){
      // 基于准备好的dom，初始化echarts实例
      let myChart = this.$echarts.init(document.getElementById('myChart'))
      // 绘制图表
      myChart.setOption({
          // title: { text: '在Vue中使用echarts' },
          // tooltip: {},
          // xAxis: {
          //     data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
          // },
          // yAxis: {},
          // series: [{
          //     name: '销量',
          //     type: 'bar',
          //     data: [5, 20, 36, 10, 10, 20]
          // }]

          visualMap: {
              min: 0,
              max: 250,
              left: 'left',
              top: 'bottom',
              text: ['高', '低'],
              calculable: false,
              orient: 'horizontal',
              inRange: {
                  color: ['#e0ffff', '#006edd'],
                  symbolSize: [30, 100]
              }
          },
          tooltip: {
              padding: 0,
              enterable: true,
              transitionDuration: 1,
              textStyle: {
                  color: '#000',
                  decoration: 'none',
              },
          },
          series: [{
              name: '中国:',
              type: 'map',
              mapType: 'china',
              itemStyle: {
                  normal: {
                      label: {
                          show: false
                      }
                  },
                  emphasis: {
                      label: {
                          show: true
                      }
                  }
              },
              data: this.mapData
          }]



      });
    }
	}
}
</script>

