var config = require('./conf/config.js')
var fs = require('fs')
var bodyParser = require('body-parser')
var path = require('path')
var express = require('express')
var app = express()
var server = require('http').createServer(app)
var cookieParser = require('cookie-parser')
app.use('/', express.static(__dirname + '/www'))
var https = require('https')
var privateKey = fs.readFileSync(path.join(__dirname, './conf/key/private.pem'), 'utf8')
var certificate = fs.readFileSync(path.join(__dirname, './conf/key/file.crt'), 'utf8')
var credentials = {
	key: privateKey,
	cert: certificate
}
app.use(cookieParser())
app.use(bodyParser.json())
var httpsServer = https.createServer(credentials, app)

// 创建http服务器  
server.listen(config.http_port, () => {
	console.log('HTTP Server is running on: http://localhost:%s', config.http_port)
})

// 创建https服务器  
httpsServer.listen(config.ssl_port, () => {
	console.log('HTTPS Server is running on: https://localhost:%s', config.ssl_port)
})

function setup_res(req, res, res_date) {
	for (var i = 0; i < config.header.length; i++) {
		var element = config.header[i]
		res.header(element.name, element.set)
	}
	setTimeout(() => {
		res.end(res_date)
	}, config.timeout)
}

function url_analysis(url, method) {
	var lv1_param = url.substring(url.lastIndexOf("/") + 1)
	var lv1_url = url.substring(0, url.lastIndexOf("/"))
	var lv2_param = lv1_url.substring(lv1_url.lastIndexOf("/") + 1)
	var lv2_url = lv1_url.substring(0, lv1_url.lastIndexOf("/"))
	return new Promise(resolve => {
		var res_path = ''
		fs.readFile(`./res/res_list_${method}.json`, (err, data) => {
			if (err) {
				console.error('res_list异常')
				resolve('error')
				return
			}
			var res_list = JSON.parse(data)
			var tmp = res_list[url] || res_list[lv1_url] || res_list[lv2_url]
			res_path = tmp ? config.res_path + (config.func_path[method] || config.func_path['other']) + tmp.data : ''
			resolve(res_path)
		})
	})
}

app.use('*', async(req, res) => {
	// console.log(req)
	console.log("收到请求", req.protocol, req.method, req.headers.host, req._parsedUrl.pathname, req.query)
	console.log(`收到${req.method.toLowerCase()}请求`)
	console.log(req.originalUrl)
	var res_path = await url_analysis(req.originalUrl, req.method.toLowerCase())
	if (res_path == 'error') {
		res.status(200).send('服务器工作异常')
		return
	}
	if (res_path && res_path != 'error') {
		fs.readFile(res_path, (err, data) => {
			setup_res(req, res, data)
		})
	} else {
		console.log("无效请求", req.url)
		res.status(200).send('无效请求')
	}
})