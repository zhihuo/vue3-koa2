
// 个人信息
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const infosSchema = new Schema({
    name: String,
    age: String,
    sex: String
},{
    collection:'info'  
  })

//发布模型
mongoose.model('Info',infosSchema)