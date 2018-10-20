var moment = require('moment')
var config = require('./conf/config.js')
var fs = require('fs')
var path = require('path')
var express = require('express')
var app = express()
var io = {}

app.use('/', express.static(__dirname + '/www'))
var privateKey = fs.readFileSync(path.join(__dirname, './conf/key/private.pem'), 'utf8')
var certificate = fs.readFileSync(path.join(__dirname, './conf/key/file.crt'), 'utf8')
var credentials = {
	key: privateKey,
	cert: certificate
}

// 文件上传模块
var multer = require('multer');

var storage = multer.diskStorage({
	destination: function (req, file, cb) {
		cb(null, './www/public/images/')
	},
	filename: function (req, file, cb) {
		cb(null, Date.now() + '-' + file.originalname);
	}
})

var upload = multer({
	storage
}).single('file')
// 实例化上传模块(前端使用参数名为file)
app.post('/upload', upload, function (req, res, next) {
	var file = req.file;
	console.log(time() + '文件上传');
	console.log('文件类型：%s', file.mimetype);
	console.log('原始文件名：%s', file.originalname);
	console.log('文件大小：%s', file.size);
	console.log('文件保存路径：%s', file.path);
	res.send({
		ret_code: '0'
	});
});




// ejs模板相关配置
//设置模板视图的目录
app.set("views", "./www/views");
//设置是否启用视图编译缓存，启用将加快服务器执行效率
app.set("view cache", false);
//设置模板引擎的格式即运用何种模板引擎
app.set("view engine", "ejs");

//设置路由
app.get("/app", function (req, res) {
	res.render("app_download", {
		body: fs.readdirSync('./www/app_down')
	});
});
app.get("/img", function (req, res) {
	res.render("img_tmp", {
		body: get_file_list('./www/public/images')
	});
});
app.get('/t', async (req, res) => {
	res.redirect('http://10.18.7.108:7777/t.html');
})
app.get('/tt', async (req, res) => {
	res.redirect('http://10.18.7.108:8083/webapp/moreAsiaPlan/moreAsiaPlan.html');
})






// var cookieParser = require('cookie-parser')
// app.use(cookieParser())
// var bodyParser = require('body-parser')
// app.use(bodyParser.json())

// 创建http服务器 
var http = new Promise(resolve => {
	let httpServer = require('http').createServer(app)
	io = require('socket.io')(httpServer);
	httpServer.listen(config.http_port, () => {
		console.log('------------http启动------------');
		config.server_list.http.forEach(element => {
			console.log(time() + element);
		});
		resolve()
	})
});
// 创建https服务器  
var https = new Promise(resolve => {
	require('https').createServer(credentials, app).listen(config.ssl_port, () => {
		console.log('------------https启动------------');
		config.server_list.https.forEach(element => {
			console.log(element);
		});
	})
	resolve()
});
// 等待服务器启动完成
Promise.all([http, https]).then(() => {
	console.log('------------------服务器启动完成-----%s-----', time());

	initSockitIo()
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




app.use('*', async (req, res) => {
	// console.log(time()+"收到请求", req.protocol, req.method, req.headers.host, req._parsedUrl.pathname, req.query)
	console.log(time() + `收到${req.method.toLowerCase()}请求 ${decodeURIComponent(req.originalUrl)}`)
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
		console.log(time() + "无效请求", req.url)
		res.status(400).send('无效请求')
	}
})




// 递归循环遍历目录
function get_file_list(path) {
	var fileList = [];

	function walk(path) {
		var dirList = fs.readdirSync(path);
		dirList.forEach(function (item) {
			if (fs.statSync(path + '/' + item).isDirectory()) {
				walk(path + '/' + item);
			} else {
				if (item != '.DS_Store') {
					fileList.push({
						name: item,
						url: path.replace("./www", "") + '/' + item
					});
				}
			}
		});
		return fileList
	}
	return walk(path).sort(function (val1, val2) {
		//读取文件信息
		var stat1 = fs.statSync('./www' + val1.url);
		var stat2 = fs.statSync('./www' + val2.url);
		//根据时间从最新到最旧排序
		return stat2.mtime - stat1.mtime;
	});
}


function time() {
	return moment().format('hh:mm') + "-"
}



// var options = { 
//     hostname: 'https://m.dianping.com/shop/91958327', 
//     path: '' , 
//     method: 'GET' 
// }; 

// var req = https_test.request(options, function (res) { 
// 	console.log('STATUS: ' + res.statusCode); 
// 	if (res.statusCode) {

// 	}

//     // console.log('HEADERS: ' + JSON.stringify(res.headers)); 
//     res.setEncoding('utf8'); 
//     res.on('data', function (chunk) { 
//         // console.log('BODY: ' + chunk); 
//     }); 
// }); 

// req.on('error', function (e) { 
//     console.log('problem with request: ' + e.message); 
// }); 

// req.end(function (e) { 
// 	console.log('end'); 
// });



function initSockitIo() {

	io.on('connection', function (socket) {
		console.log('a user connected');
		io.emit('serverMsg','ok')
	});


}