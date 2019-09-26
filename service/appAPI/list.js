
// 表格接口的请求
const router = require('koa-router')()
const mongoose = require('mongoose')

// router.prefix('/list');

router.get('/usertables', async (ctx, next) => {
  const UsertbleSchema = mongoose.model('Usertables')
  const data = await UsertbleSchema.find()
  const result = {
    code:200,
    response: data,
    ts: 12345
  }
  ctx.body = result
})

module.exports = router