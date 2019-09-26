

// 整合所以接口请求模块，统一一个出口
const compose = require('koa-compose')
const glob = require('glob')
const { resolve } = require('path')

// compose 整合多个路由文件
var registerRouter = function() {
    let routers = [];
    glob.sync(resolve(__dirname, './', '**/*.js'))
    	// 确保接口请求只设置一个index的判断
        .filter(value => (value.indexOf('index.js') === -1))
        .map(router => {
            routers.push(require(router).routes())
            routers.push(require(router).allowedMethods())
        })
    return compose(routers)
}


module.exports = registerRouter
