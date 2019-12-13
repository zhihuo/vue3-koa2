// 个人信息接口数据
const mongoose = require('mongoose')

// exports.getFindInfoData = async ()=>{
// 	const InfoSchema = mongoose.model('Info');
// 	const d = InfoSchema.findOne();
// 	return d;
// }

const getFindInfoData = async ()=>{
	const InfoSchema = mongoose.model('Info');
	const d = InfoSchema.findOne();
	return d;
}

module.exports  = getFindInfoData


