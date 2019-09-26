// 地图信息
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const mapSchema = new Schema({
    name: String,
    value: Number,
},{
    collection:'map'  
  })

//发布模型
mongoose.model('Map',mapSchema)