var config = require('./conf/config.js')
var fs = require('fs');
var bodyParser = require('body-parser');
var path = require('path');
let express = require('express');
var fs = require('fs');
let app = express();
var server = require('http').createServer(app);
var cookieParser = require('cookie-parser');
app.use('/', express.static(__dirname));
var https = require('https');
var privateKey = fs.readFileSync(path.join(__dirname, './res/key/private.pem'), 'utf8');
var certificate = fs.readFileSync(path.join(__dirname, './res/key/file.crt'), 'utf8');
var credentials = {
	key: privateKey,
	cert: certificate
};
app.use(cookieParser());
app.use(bodyParser.json());
var httpsServer = https.createServer(credentials, app);

// 创建http服务器  
server.listen(config.http_port, function () {
	console.log('HTTP Server is running on: http://localhost:%s', config.http_port);
});

// 创建https服务器  
httpsServer.listen(config.ssl_port, function () {
	console.log('HTTPS Server is running on: https://localhost:%s', config.ssl_port);
});


function setup_res(req, res, res_date) {
	for (var i = 0; i < config.header.length; i++) {
		var element = config.header[i];
		res.header(element.name, element.set)
	}
	setTimeout(() => {
		res.end(res_date);
	}, config.timeout)
	// console.log("收到请求", req.method, req._parsedUrl.pathname, req.query);
}

function url_analysis(url, method) {
	var lv1_param = url.substring(url.lastIndexOf("/") + 1);
	var lv1_url = url.substring(0, url.lastIndexOf("/"));
	var lv2_param = lv1_url.substring(lv1_url.lastIndexOf("/") + 1);
	var lv2_url = lv1_url.substring(0, lv1_url.lastIndexOf("/"));
	return new Promise(resolve => {
		var res_path = ''
		fs.readFile(`./res/res_list_${method}.json`, (err, data) => {
			var res_list = JSON.parse(data)
			if (res_list) {
				var tmp = res_list[url] || res_list[lv1_url] || res_list[lv2_url]
			}
			res_path = tmp ? tmp.data : ''
			resolve(res_path);
		});
	});
}

async function get_res(url, method, res) {

}


app.use('*', async(req, res) => {
	// console.log(req);
	console.log(`收到${req.method.toLowerCase()}请求`);
	console.log(req.originalUrl);
	var res_path = await url_analysis(req.originalUrl, req.method.toLowerCase());
	if (res_path) {
		fs.readFile(res_path, (err, data) => {
			setup_res(req, res, data)
		})
	} else {
		console.log("无效请求", req.url);
		res.status(200).send('无效请求');
	}
});




