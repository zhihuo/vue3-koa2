<style lang="less" scoped>
	.btns{
		margin: 20px auto;
	}
</style>
<template>
    <div>
			<div class="btns"><el-button type="primary" @click="add">新增</el-button></div>
        <el-table
				:data="tableData"
				style="width: 100%">
				<el-table-column
					prop="id"
					label="ID"
					width="180">
				</el-table-column>
				<el-table-column
					prop="name"
					label="名称"
					width="180">
				</el-table-column>
				<el-table-column
				label="操作"
				width="100">
				<template slot-scope="scope">
					<el-button @click="delClick(scope.row)" type="text" size="small">删除</el-button>
					<el-button type="text" size="small" @click="editClick(scope.row)">编辑</el-button>
				</template>
				</el-table-column>
			</el-table>
			<!-- <div v-for="item in tooldata" :key="item">
         {{item}}
			</div> -->
			<el-dialog
			title="提示"
			:visible.sync="dialogVisible"
			width="30%">
			<ul>
				<li><label>ID:</label><el-input v-model="ids" placeholder="请输入内容"></el-input></li>
				<li><label>Name:</label><el-input v-model="names" placeholder="请输入内容"></el-input></li>
			</ul>
			<span slot="footer" class="dialog-footer">
				<el-button @click="dialogVisible = false">取 消</el-button>
				<el-button type="primary" @click="sure">确 定</el-button>
			</span>
		</el-dialog>
    </div>
</template>
<script>
export default {
  data(){
		return{
			tableData: [],
			dialogVisible: false,
			ids: '',
			names: '',
			editDialog: false,
			tooldata: []
		};
	},
  mounted(){
		this.init()
		// this.initTool()
  },
	methods:{
		async init() {
			const res = await this.$http.get('/products', {})
			console.log('get===', res)
			if (res.status === 200) {
				this.tableData = res.response
			}
		},
		// async initTool() {
		// 	const res = await this.$http.get('/tool', {})
		// 	console.log('get===', res)
		// 	if (res.status === 200) {
		// 		this.tooldata = res.response
		// 	}
		// },
		add() {
			this.dialogVisible = true
			this.editDialog = false
		},
		async sure() {
			this.dialogVisible = false
			const params = {
				id: this.ids,
				name: this.names
			}
			const res = await this.$http.post((this.editDialog ? '/editproducts' : '/addproducts'), params)
			console.log('res===', res)
			if (res.status === 200) {
				this.$message(res.msg)
				this.init()
			}
		},
		async delClick(item) {
			console.log('item==', item)
			const params = {
				id: item.id
			}
			const res = await this.$http.post('/delproducts', params)
			console.log('res===', res)
			if (res.status === 200) {
				this.$message(res.msg)
				this.init()
			}
		},
		async editClick(item) {
			this.dialogVisible = true
			this.editDialog = true
			this.ids = item.id
			this.names = item.name
		}
	}
}
</script>
