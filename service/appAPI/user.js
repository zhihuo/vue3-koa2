
// 用户接口的请求
const router = require('koa-router')()
// const dbs = require('../dbtemplate/index');
const mongoose = require('mongoose')

// router.prefix('/users');

router.get('/users', async (ctx, next) => {
  const UserSchema = mongoose.model('User')
  const data = await UserSchema.find().catch((err) => {
    ctx.response.body = {status:500,msg:err};
  });
  const result = {
    code:200,
    response: data,
    ts: 12345
  }
  ctx.body = result
})

module.exports = router