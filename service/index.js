const Koa = require('koa')
const app = new Koa()
const { connect , initSchemas } = require('./database/init.js')
const bodyParser = require('koa-bodyparser')
const cors = require('koa2-cors')
const session=require('koa-session');
app.keys = ['this is my secret and fuck you all'];//我理解为一个加密的密钥

app.use(session({
  key: 'koa:sess', /** cookie的key。 (默认是 koa:sess)  */
  maxAge: 60*1000*30, /** session 过期时间，以毫秒ms为单位计算，这里表示半个小时 */
  overwrite: true, /** 是否允许重写 。(默认是 true) */
  httpOnly: true, /** 是否设置HttpOnly，如果在Cookie中设置了"HttpOnly"属性，
  					那么通过程序(JS脚本、Applet等)将无法读取到Cookie信息，
  					这样能有效的防止XSS攻击。  (默认 true) */
  signed: true, /** 是否签名。(默认是 true) */
},app));

const registerRouter  = require('./appAPI/index.js');

app.use(bodyParser())
app.use(cors())

//加载路由中间件
app.use(registerRouter());

;(async ()=>{
    await connect()
    initSchemas()
})()

app.use(async(ctx)=>{
    ctx.body='<h1>Hello Koa2 hahaha!</h1>'
})

app.listen(9000);
console.log('app started at port 9000...')