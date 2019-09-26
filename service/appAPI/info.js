
// 个人信息接口的请求
const router = require('koa-router')()
const mongoose = require('mongoose')

router.get('/info', async (ctx, next) => {
  const InfoSchema = mongoose.model('Info')
  const data = await InfoSchema.findOne()
  const result = {
    code:200,
    response: data,
    ts: 12345
  }
  ctx.body = result
})

module.exports = router