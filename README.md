# vue3 + koa2


# 这是一个前端使用vue3 和 Nodejs的koa2框架，进行前后端分工编写成的测试项目

```bash
 前端的操作如下：
 # 安装插件
 npm install
 # 运行前端服务
 npm run serve
 # 打包代码
 npom run build

```

# axios配置使用
```
 1. 使用过程现实进度条
 2. 在 vue 实例中使用

 this.$http.get()
 // 或者
 this.$http.post()
```


# service 这个文件是koa2的接口服务，连接了MongoDB

```bash

后端Nodejs的Koa2操作如下：
# 安装插件
npm install
# 运行后端服务
   1. 首先启动MongoDB: sudo mongod
   2. 启动node，npm start  (注意：在package.json 文件的scripts下设置："start": "nodemon start.js")， 如下
    "scripts": {
        "test": "echo \"Error: no test specified\" && exit 1",
        "start": "nodemon start.js"
    },
```

```
  1. 安装了nodemon，可以实时更新koa2里面编写的内容
  2. start.js 设置了babel-register、babel-plugin-transform-es2015-modules-commonjs插件，用来是映射开启index.js的文件
  3. index.js 是服务的所以方法的出口，端口的输出

  目录格式说明：
  service
     |
     |—— start.js 映射开启文件
     |
     |—— index.js 所有文件的输出、端口输出
     |
     |—— database 数据的处理 
     |       |
     |       |—— init.js 初始化数据库的连接，schemas类型的基本设置
     |       |
     |       |—— schema 文件夹，数据基本类型设计集合
     |
     |
     |
     |—— appAPI  数据请求接口API
     |      |
     |      |—— index.js 所有API统一出口，集成
     |      |
     |      |—— *.js 具体某块的API请求方法
     |
```
