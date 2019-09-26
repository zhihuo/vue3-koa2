<style lang="less" scoped>
</style>
<template>
    <el-form :model="ruleForm2" status-icon :rules="rules2" ref="ruleForm2" label-width="100px" class="demo-ruleForm">
			<el-form-item label="姓名" prop="username">
				<el-input v-model="ruleForm2.username"></el-input>
			</el-form-item>
			<el-form-item label="密码" prop="pass">
				<el-input type="password" v-model="ruleForm2.pass" auto-complete="off"></el-input>
			</el-form-item>
			<el-form-item>
				<el-button type="primary" @click="submitForm('ruleForm2')">提交注册</el-button>
				<el-button @click="resetForm('ruleForm2')">重置</el-button>
				<router-link to="/login">登录</router-link>
			</el-form-item>
		</el-form>
</template>
<script>
export default {
    data() {
      var checkAge = (rule, value, callback) => {
        if (!value) {
          return callback(new Error('姓名不能为空'));
				}
				callback();
      };
      var validatePass = (rule, value, callback) => {
        if (value === '') {
          return callback(new Error('请输入密码'));
				}
				callback();
      };
      return {
        ruleForm2: {
          pass: '',
          checkPass: '',
          username: ''
        },
        rules2: {
          pass: [
            { validator: validatePass, trigger: 'blur' }
          ],
          username: [
            { validator: checkAge, trigger: 'blur' }
          ]
        }
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            // alert('submit!');
            // this.$router.push('index')
            this.register()
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
			},
			async register() {
				const params = {
					password: this.ruleForm2.pass,
					userName: this.ruleForm2.username
				}
				const res = await this.$http.post('/register', params)
				if(res.status === 200) {
					this.$message(res.msg)
					this.$router.push('index')
				} else {
					this.$message(res.msg)
				}
				console.log('res===', res)
			}
    }
  }

</script>
