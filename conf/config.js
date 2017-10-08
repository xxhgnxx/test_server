var os = require('os');
var IPv4 = [];
for (eth in os.networkInterfaces()) {
    for (var i = 0; i < os.networkInterfaces()[eth].length; i++) {
        var element = os.networkInterfaces()[eth][i];
        if (element.family == 'IPv4') {
            IPv4.push(element.address)
        }
    }
}
var http_port = '7777'
var ssl_port = '9999'
var res_path = "./res"
var func_path = {
    "get": "/get",
    "put": "/get",
    "post": "/get",
    "other": "/get",
}
var server_list = {
    http: ['http://localhost:' + http_port],
    https: ['https://localhost:' + ssl_port]
}
IPv4.forEach(ip => {
    server_list.http.push('http://' + ip + ':' + http_port)
    server_list.https.push('https://' + ip + ':' + ssl_port)
})


module.exports = {
    "timeout": 200, // 返回延迟，模拟网络阻塞时使用
    "header": [{
            "name": "Access-Control-Allow-Origin",
            "set": "https://localhost:8080"
        },
        {
            "name": "Access-Control-Allow-Headers",
            "set": "*"
        },
        {
            "name": "Access-Control-Allow-Methods",
            "set": "*"
        },
        {
            "name": "X-Powered-By",
            "set": "3.2.1"
        },
        {
            "name": "Content-Type",
            "set": "application/json;charset=utf-8"
        },
        {
            "name": "Access-Control-Allow-Credentials",
            "set": "true"
        }
    ],
    http_port,
    ssl_port,
    res_path,
    func_path,
    ip: IPv4,
    server_list
}