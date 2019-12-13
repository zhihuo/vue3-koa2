
// 个人信息接口的请求
const router = require('koa-router')()
// const mongoose = require('mongoose')
const getFindInfoData = require('../models/info')
// import getFindInfoData from '../models/info.js'

router.get('/info', async (ctx, next) => {
  // const InfoSchema = mongoose.model('Info')
  // const data = await InfoSchema.findOne()
  const data = await getFindInfoData()
  const result = {
    code:200,
    response: data,
    ts: 12345
  }
  ctx.body = result
})

module.exports = router