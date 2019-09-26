<style lang="less" scoped>
	.text {
    font-size: 14px;
  }
  .item {
    margin-bottom: 18px;
  }

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }
  .clearfix:after {
    clear: both
  }

  .box-card {
    width: 480px;
  }
</style>
<template>
    <el-card class="box-card">
    <div slot="header" class="clearfix">
        <span>系统权限用户名称</span>
        <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
    </div>
    <div v-for="(o, index) in userlist" :key="index" class="text item">
        {{'用户： ' + o.name }}
    </div>
    </el-card>
</template>
<script>
export default {
		data(){
			return{
				userlist: []
			};
		},
    created(){
			this.init()
		},
		methods:{
			async init() {
				const res = await this.$http.get('/users', {})
				this.userlist = res.response
			}
		}
}
</script>
