# test_server
测试用服务器
## Getting Started
* Run `npm install` from the project root.
* `npm start` 启动服务器
* 使用的是异步获取返回值，故启动服务器之后，直接修改res目录下的res_list_*.json配置便可热生效请求
* 其他配置请自行参考conf/config.js
* cookie、proxy等请自行配置
* <font color=red>**注意**</font>：由于使用了部分es6的语法，所以请不要使用dev_tool等浏览器环境工具执行
----
```
.
├── conf                            配置目录
│   ├── config.js                   主配置文件
│   └── key                         SSL key目录
├── package.json
├── res                             请求返回数据目录
│   ├── get
│   ├── other
│   ├── post
│   ├── put
│   ├── res_list_get.json           res_list_*.json 对应的请求类型返回列表
│   ├── res_list_post.json
│   └── res_list_put.json
├── www                             静态文件目录，直接访问，例：localhost:7777/index.html
└── server.js                       服务主程序
```
## 后续，添加转发