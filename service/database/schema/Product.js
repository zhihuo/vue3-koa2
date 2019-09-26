const mongoose = require('mongoose')
const Schema = mongoose.Schema

var productSchema = new Schema({
    name:String,
    id:String
},{ collection:'product' });

//发布模型
mongoose.model('ProductSchema',productSchema)