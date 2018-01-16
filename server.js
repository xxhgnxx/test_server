var config = require('./conf/config.js')
var fs = require('fs')
var path = require('path')
var express = require('express')
var app = express()
app.use('/', express.static(__dirname + '/www'))
var privateKey = fs.readFileSync(path.join(__dirname, './conf/key/private.pem'), 'utf8')
var certificate = fs.readFileSync(path.join(__dirname, './conf/key/file.crt'), 'utf8')
var credentials = {
	key: privateKey,
	cert: certificate
}

// ejs模板相关配置
//设置模板视图的目录
app.set("views","./www/views");
//设置是否启用视图编译缓存，启用将加快服务器执行效率
app.set("view cache",false);
//设置模板引擎的格式即运用何种模板引擎
app.set("view engine","ejs");

//设置路由
app.get("/app",function(req,res){
    res.render("app_download",{body:fs.readdirSync('./www/app_down')});
});
app.get('/test', async(req, res) => {
	res.redirect('http://10.18.7.108:8080/webapp/soccer_hero.html');
})
// var cookieParser = require('cookie-parser')
// app.use(cookieParser())
// var bodyParser = require('body-parser')
// app.use(bodyParser.json())

// 创建http服务器 
var http = new Promise(resolve => {
	require('http').createServer(app).listen(config.http_port, () => {
		console.log('------------http启动------------');
		config.server_list.http.forEach(element => {
			console.log(element);
		});
		resolve()
	})
});
// 创建https服务器  
var https = new Promise(resolve => {
	require('https').createServer(credentials, app).listen(config.ssl_port, () => {
		console.log('------------https启动-----------');
		config.server_list.https.forEach(element => {
			console.log(element);
		});
	})
	resolve()
});
// 等待服务器启动完成
Promise.all([http, https]).then(() => {
	console.log('------------------服务器启动完成------------------');
});

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
	// console.log("收到请求", req.protocol, req.method, req.headers.host, req._parsedUrl.pathname, req.query)
	console.log(`收到${req.method.toLowerCase()}请求 ${decodeURIComponent(req.originalUrl)}`)
	var res_path = await url_analysis(req._parsedUrl.pathname, req.method.toLowerCase())
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
		res.status(404).send('无效请求')
	}
})




// 递归循环遍历目录
// function walk(path){
// 	var fileList = [];
// 	var dirList = fs.readdirSync(path);
// 	dirList.forEach(function(item){
// 		if(fs.statSync(path + '/' + item).isDirectory()){
// 			walk(path + '/' + item);
// 		}else{
// 			fileList.push(path + '/' + item);
// 		}
// 	});
// 	return fileList
// }




console.log(walk('./www/app_down'));