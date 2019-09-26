const mongoose = require('mongoose')
const Schema = mongoose.Schema


//创建UserShema
const userSchema = new Schema({
    name:String,
    id:String
},{
  collection:'user'  
}) 


//发布模型
mongoose.model('User',userSchema)