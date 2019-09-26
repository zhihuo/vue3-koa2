// 表格信息
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const usertablesSchema = new Schema({
    data: String,
    name: String,
    address: String
},{
    collection:'usertables'  
  })
  
//发布模型
mongoose.model('Usertables',usertablesSchema)