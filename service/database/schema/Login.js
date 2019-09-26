
// 登录、登出、注册的字段和加密方法在此处理
const mongoose = require('mongoose')
const Schema = mongoose.Schema
const bcrypt = require('bcrypt')
const SALT_WORK_FACTOR = 10

// 登录、注册字段设置
const loginSchema = new Schema({
    userName : {unique:true,type:String},
    password : String,
    sex: String
},{
    collection:'login'  
  })


// 注册保存数据的时候，密码要加密
loginSchema.pre('save', function(next){
    bcrypt.genSalt(SALT_WORK_FACTOR,(err,salt)=>{
        if(err) return next(err)
        bcrypt.hash(this.password,salt,(err,hash)=>{
            if(err) return next(err)
            this.password = hash
            next()
        })
    })
})
// 登录的时候，调用这个方法，对比密码是否一致
loginSchema.methods={
    comparePassword:(_password,password)=>{
        return new Promise((resolve,reject)=>{
            bcrypt.compare(_password,password,(err,isMatch)=>{
                console.log('isMatch===', isMatch)
                let msg = '登录成功!'
                if(!err) resolve(msg)
                else reject(err)
            })
        })
    }
}
//发布模型
mongoose.model('Login',loginSchema)