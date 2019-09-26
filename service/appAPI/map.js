
// 地图接口的请求
const router = require('koa-router')()
const mongoose = require('mongoose')

router.get('/map', async (ctx, next) => {
  const MapSchema = mongoose.model('Map')
  const data = await MapSchema.findOne()
  const result = {
    code:200,
    response: data,
    ts: 12345
  }
  ctx.body = result
})

module.exports = router