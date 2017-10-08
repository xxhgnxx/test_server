

module.exports = {
    "timeout":200,   // 返回延迟，模拟网络阻塞时使用
    "header":[
        {"name": "Access-Control-Allow-Origin","set":"https://localhost:8080"},
        {"name":  "Access-Control-Allow-Headers","set":"*"},
        {"name": "Access-Control-Allow-Methods","set":"*"},
        {"name": "X-Powered-By","set":"3.2.1"},
        {"name": "Content-Type","set":"application/json;charset=utf-8"},
        {"name": "Access-Control-Allow-Credentials","set":"true"}
    ],
    "http_port":"7777",
    "ssl_port":"9999",
    res_path:"./res",
    func_path:{
        "get":"/get",
        "put":"/get",
        "post":"/get",
        "other":"/get",
    }
}
