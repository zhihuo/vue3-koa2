
// 产品接口的请求
const router = require('koa-router')()
// const dbs = require('../../dbtemplate/index');
const mongoose = require('mongoose')

router.get('/products', async (ctx, next) => {
  if (!ctx.session.user) {
    ctx.body = {
      status: 504,
      response: 'timeout',
      msg: '登录超时了！'
    }
    return
  }
  const ProductSchema = mongoose.model('ProductSchema')
  const data = await ProductSchema.find()
  const result = {
    status:200,
    response: data,
    ts: 12345
  }
  ctx.body = result
})
// 新增
router.post('/addproducts', async(ctx, next) => {
  let postData = ctx.request.body;
  ctx.response.body = {status:200,msg:'添加成功！',data: postData};
  const ProductSchema = mongoose.model('ProductSchema')
  var productInset = new ProductSchema(postData);
  productInset.save();
})

// 删除
router.post('/delproducts',async (ctx,next) => {
  let postData = ctx.request.body;
  // ctx.response.body = {status:200,msg:'删除成功！',data: postData};
  const ProductSchema = mongoose.model('ProductSchema')
  var d = await ProductSchema.where(postData).remove()
  ctx.body={
      status:200,msg:'删除成功！',data: d
    }
});

// 编辑
router.post('/editproducts',async (ctx,next) => {
  let postData = ctx.request.body;
  // ctx.response.body = {status:200,msg:'删除成功！',data: postData};
  const ProductSchema = mongoose.model('ProductSchema')
  var d = await ProductSchema.where(
    { id: postData.id}
    ).update(
      { name: postData.name }
    )
  ctx.body={
      status:200,msg:'编辑成功！',data: d
    }
});

module.exports = router