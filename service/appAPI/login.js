// 登录、登出、注册的接口
const Router = require('koa-router')
const mongoose = require('mongoose')

let router = new Router()
router.get('/',async(ctx)=>{
    ctx.body="这是用户操作首页"
})

// 登录
router.post('/login',async(ctx)=>{
    let loginUser = ctx.request.body
    // console.log('loginUser==', loginUser)
    let userName = loginUser.userName
    let password = loginUser.password

    //引入Login的model
    const Login = mongoose.model('Login')
        
    //查找用户名是否存在，如果存在开始比对密码
    await Login.findOne({userName:userName}).then(async(result)=>{
        console.log('result===', result)
        if(result){
            // 设置用户名cookie
            ctx.session.user = result.userName;
            //因为是实例方法，所以要new出对象，才能调用
            let newLogin = new Login()
            //当用户名存在时，开始比对密码
            await newLogin.comparePassword(password,result.password)
            .then(isMatch=>{
                //返回比对结果
                ctx.body={status:200,msg:isMatch}
            })
            .catch(error=>{
                //出现异常，返回异常
                console.log(error)
                ctx.body={status:500,msg:error}
            })
        }else{
            ctx.body={status:200,msg:'用户名不存在'}
        }
    }).catch(error=>{
        console.log(error)
        ctx.body={status:500,msg:error}
    })

})

// 登录
// router.post('/login', async (ctx, next) => {
//     const res = ctx.request.body
//     const Login = mongoose.model('Login')
//     await Login.findOne(res, (err, data) => {
//         if (err) { throw  err }
//         if (data) {
//             // 设置用户名cookie
//             ctx.session.user = res.userName;
//             ctx.response.body = {status:200,msg:'登录成功！',data: res};
//         }else {
//             ctx.response.body = {status:201,msg:'登录失败！',data: res};
//         }
//     }).catch(error=>{
//         ctx.response.body={
//             status:500,
//             msg:error
//         }
//     })
// })

// 注册
router.post('/register', async (ctx, next) => {
    const res = ctx.request.body
    const { userName, password } = res
    const Login = mongoose.model('Login')
    let doc = await Login.findOne({ userName })
    if (doc) {
        ctx.response.body = {status:201,msg:'用户名已经存在！',data: res};
    } else {
    var productInset = new Login(res);
    await productInset.save().then(() => {
        ctx.response.body = {status:200,msg:'注册成功！'};
    }).catch((err) => {
        ctx.response.body = {status:500,msg:err};
    });
  }
})

// 退出登录
router.get('/loginout', async (ctx, next) => {
    // 清空缓存
    ctx.session.user = '';
    const result = {
      status:200,
      response: '成功清除缓存！',
      ts: 12345
    }
    ctx.body = result
})

  

module.exports =router