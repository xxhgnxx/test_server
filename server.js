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
// var privateKey  = fs.readFileSync('./res/key/private.pem', 'utf8');  
// var certificate = fs.readFileSync('./res/key/file.crt', 'utf8'); 
var privateKey = fs.readFileSync(path.join(__dirname, './res/key/private.pem'), 'utf8');
var certificate = fs.readFileSync(path.join(__dirname, './res/key/file.crt'), 'utf8');
var credentials = {
	key: privateKey,
	cert: certificate
};
app.use(cookieParser());
app.use(bodyParser.json());
var httpsServer = https.createServer(credentials, app);

var SSLPORT = 9999;
var PORT = 9999;
var http_port=7777;
//创建http服务器  
server.listen(http_port, function() {  
    console.log('HTTP Server is running on: http://localhost:%s', http_port);  
});  

// //创建https服务器  
httpsServer.listen(SSLPORT, function () {
	console.log('HTTPS Server is running on: https://localhost:%s', SSLPORT);
});


// let server = require('http').createServer(app);
// let io = require('socket.io').listen(httpsServer);
// let io = require('socket.io').listen(88);
// let port = process.env.PORT || 8000;
// server.listen(port);




function setup_res(req, res, res_date) {
	console.log("收到请求", req.method, req._parsedUrl.pathname, req.query);
	// res.jsonp({status:'jsonp'});
	
	res.header("Access-Control-Allow-Origin", "https://localhost:8080");
	res.header("Access-Control-Allow-Headers", "*");
	res.header("Access-Control-Allow-Methods", "*");
	res.header("X-Powered-By", ' 3.2.1')
	res.header("Content-Type", "application/json;charset=utf-8");
	// res.header("Content-Type", "application/application/vnd.api+json;charset=utf-8");
	res.header('Access-Control-Allow-Credentials', 'true');
	setTimeout(() => {
		res.end(res_date);
	}, 3000)
}


app.get('/', (req, res) => {
	console.log("收到请求  /");
});
app.get('/api', (req, res) => {
	console.log("收到请求  /api");
	res.end();
});
app.get('/localapi', (req, res) => {
	console.log("收到请求  /localapi");
	res.end();
});

app.post('/log',(req,res)=>{
	console.log("收到请求  log",req.query);
	console.log("收到请求  log",req.params.log);
	console.log("收到请求  log",req.body);
		res.writeHead(200, {
		"Content-Type": "application/json"
	});

		res.end();
})

app.get('/login', (req, res) => {
	res.cookie("token","123123")
	fs.readFile('res/login.ok.json', (err, data) => {
		setup_res(req, res, data)
	})
});
app.get('/api/activity/join1', (req, res) => {
	fs.readFile('res/login.ok.json', (err, data) => {
		setup_res(req, res, data)
	})
});
app.get('/api/activity/my', (req, res) => {
	fs.readFile('res/my.json', (err, data) => {
		setup_res(req, res, data)
	})
});
app.get('/api/activity/good-luck', (req, res) => {
	fs.readFile('res/luck.json', (err, data) => {
		setup_res(req, res, data)
	})
});
app.get('/v2/activity/hisensetv/4074880', (req, res) => {
	fs.readFile('res/haixin.json', (err, data) => {
		setup_res(req, res, data)
	})
});
app.get('/get_list', (req, res) => {
	// res.cookie("localhost",0, {domain:"localhost",maxAge: 60 * 1000})	
	// res.cookie("localhost:8080",2, {domain:"localhost:8080",maxAge: 60 * 1000})	
	// res.cookie("def",1, {maxAge: 60 * 1000})	
	// console.log("cookies",req.cookies.def);
	fs.readFile('res/list.json', (err, data) => {
		setup_res(req, res, data)
	})
});
app.get('/get_menu', (req, res) => {
	fs.readFile('res/menu.json', (err, data) => {
		setup_res(req, res, data)
	})
});
app.get('/activity/quiz/temp/redpacket', (req, res) => {
	fs.readFile('res/ok.json', (err, data) => {
		setup_res(req, res, data)
	})
});
app.post('/activity/quiz/temp/redpacket/send', (req, res) => {
	fs.readFile('res/ok.json', (err, data) => {
		setup_res(req, res, data)
	})
});
app.post('/activity/quiz/temp/submit', (req, res) => {
	fs.readFile('res/submit_ok.json', (err, data) => {
		setup_res(req, res, data)
	})
	// var data = JSON.stringify({
	// 	code: 0,
	// 	message: "成功",
	// 	id: "xxxxx",
	// });
	// 	setup_res(req,res,data)
});
app.get('/activity/quiz/temp/lists', (req, res) => {
	fs.readFile('res/list.json', (err, data) => {
		setup_res(req, res, data)
	})
	// var data = JSON.stringify({
	// 	code: 0,
	// 	message: "成功",
	// 	id: "xxxxx",
	// });
	// 	setup_res(req,res,data)
});


app.get('/admin/agents/list', (req, res) => {
	var data = JSON.stringify({
		code: 0,
		message: "成功",
		data: [{
				agent_id: 31,
				agent_name: "1号代理商",
				balance: 11111
			},
			{
				agent_id: 32,
				agent_name: "2号代理商",
				balance: 22222
			},
			{
				agent_id: 33,
				agent_name: "3号代理商",
				balance: 33333
			},
		]
	});
	setup_res(req, res, data)
})
app.get('/admin/agents/get_customer_list', (req, res) => {
	console.log('/admin/agents/get_customer_list', res);

	var data = JSON.stringify({
		code: 0,
		message: "成功",
		data: {
			agent_id: 34,
			agent_name: "adidas",
			balance: 999,
			list: [{
					agent_id: 36,
					user_id: 10,
					agent_name: "adidas-客户2"
				},
				{
					agent_id: 35,
					user_id: 9,
					agent_name: "adidas-客户1"
				}
			]
		}
	});


	res.writeHead(200, {
		"Content-Type": "application/json"
	});
	setTimeout(() => {
		res.end(data);
	}, 1000)
	// console.log('ttttttttttttt',res);
})



app.post('/admin/agents', (req, res) => {
	console.log('test', res);
	res.writeHead(200, {
		"Content-Type": "application/json"
	});
	var data = JSON.stringify({
		code: 0,
		message: "成功",
		data: ""
	});

	setTimeout(() => {
		res.end(data);
	}, 1000)
})
app.post('/admin/units/changeStatus', (req, res) => {
	console.log('test', res);
	res.writeHead(200, {
		"Content-Type": "application/json"
	});
	var data = JSON.stringify({
		code: 0,
		message: "成功",
		data: ""
	});

	setTimeout(() => {
		res.end(data);
	}, 1000)
})
app.delete('/admin/units/unit/126', (req, res) => {
	console.log('test', res);
	res.writeHead(200, {
		"Content-Type": "application/json"
	});
	var data = JSON.stringify({
		code: 0,
		message: "成功",
		data: ""
	});

	setTimeout(() => {
		res.end(data);
	}, 1000)
})
app.post('/admin/accounts/allocation', (req, res) => {
	console.log('test', res);
	res.writeHead(200, {
		"Content-Type": "application/json"
	});
	var data = JSON.stringify({
		code: 0,
		message: "成功",
		data: ""
	});

	setTimeout(() => {
		res.end(data);
	}, 1000)
})

app.post('/admin/accounts/recharge', (req, res) => {
	console.log('test', res);
	res.writeHead(200, {
		"Content-Type": "application/json"
	});
	var data = JSON.stringify({
		code: 0,
		message: "成功",
		data: ""
	});

	setTimeout(() => {
		res.end(data);
	}, 1000)
})
app.post('/admin/accounts/withdraw', (req, res) => {
	console.log('test', res);
	res.writeHead(200, {
		"Content-Type": "application/json"
	});
	var data = JSON.stringify({
		code: 0,
		message: "成功",
		data: ""
	});

	setTimeout(() => {
		res.end(data);
	}, 1000)
})







app.put('/admin/agents/close', (req, res) => {
	console.log('test', res);
	res.writeHead(200, {
		"Content-Type": "application/json"
	});
	var data = JSON.stringify({
		code: 0,
		message: "成功",
		data: ""
	});
	setTimeout(() => {
		res.end(data);
	}, 1000)
})

app.put('/admin/agents/start', (req, res) => {
	console.log('test', res);
	res.writeHead(200, {
		"Content-Type": "application/json"
	});
	var data = JSON.stringify({
		code: 0,
		message: "成功",
		data: ""
	});
	setTimeout(() => {
		res.end(data);
	}, 1000)
})

app.put('/admin/agents/*', (req, res) => {
	console.log('test', res);
	res.writeHead(200, {
		"Content-Type": "application/json"
	});
	var data = JSON.stringify({
		code: 0,
		message: "成功",
		data: ""
	});
	setTimeout(() => {
		res.end(data);
	}, 1000)
})


app.get('/admin/units/getOne', (req, res) => {
	console.log('/admin/units/getOne?unit_id=', res);
	var data = JSON.stringify({
		code: 0,
		message: "成功",
		data: getOneData
	});
	res.writeHead(200, {
		"Content-Type": "application/json"
	});
	setTimeout(() => {
		res.end(data);
	}, 1000)
	// console.log('ttttttttttttt',res);
})



var timedata = [102, 220, 224, 505];


var localDIR = [
	"1004000000",
	"1008000000",
	"1156110000",
	"1156130100",
	"1156130200",
	"1156130300",
	"1156130400",
	"1156130500",
	"1156130600",
	"1156130700",
	"1156130800",
	"1156130900",
	"1156131000",
	"1156131100",
]


var getOneData = {

	"directional": [{
			"directional_id": "1",
			"info": localDIR,
			"type": "1",
			"is_delete": "0",
			"unit_id": "29"
		},
		{
			"directional_id": "2",
			"info": localDIR,
			"type": "2",
			"is_delete": "0",
			"unit_id": "29"
		},
		{
			"directional_id": "4",
			"info": ['1'],
			"type": "4",
			"is_delete": "0",
			"unit_id": "29"
		},
		{
			"directional_id": "8",
			"info": ['1', '3'],
			"type": "8",
			"is_delete": "0",
			"unit_id": "29"
		},
		{
			"directional_id": "16",
			"info": timedata,
			"type": "16",
			"is_delete": "0",
			"unit_id": "29"
		},
		{
			"directional_id": "32",
			"info": localDIR,
			"type": "32",
			"is_delete": "0",
			"unit_id": "29"
		}
	],
	"frequency": [{
			"frequency_id": "11",
			"frequency_mode": "2",
			"frequency_num": "100",
			"is_delete": "0",
			"unit_id": "29"
		},
		{
			"frequency_id": "12",
			"frequency_mode": "4",
			"frequency_num": "1000",
			"is_delete": "0",
			"unit_id": "29"
		}
	],
	"unit": [{
		"bidding": "0",
		"cost_type": "8",
		"delivery_flux": "8",
		"delivery_flux_num": "1000",
		"delivery_mode": "2",
		"delivery_priority": "1",
		"delivery_rate": "4",
		"delivery_schedule": [
			[
				1470787200,
				1473465600
			],
			[
				1484006400,
				1491782400
			],
			[
				1484006400,
				1491782400
			],
			[
				1484006400,
				1491782400
			],
			[
				1484006400,
				1491782400
			],
			[
				1484006400,
				1491782400
			],
			[
				1484006400,
				1491782400
			],
			[
				1484006400,
				1491782400
			],
			[
				1484006400,
				1491782400
			],
			[
				1484006400,
				1491782400
			],
		],
		"delivery_threshold": "1000",
		"execplan_id": "5",
		"is_delete": "0",
		"resource_id": "2",
		"status": "4",
		"type_id": "2",
		"unit_id": "29",
		"unit_name": "abc",
		"execplan_type": 2

	}],
	"execplan": [{
			"execplan_id": 1,
			"execplan_name": "aaaa"
		},
		{
			"execplan_id": 2,
			"execplan_name": "bbbb"
		},
		{
			"execplan_id": 3,
			"execplan_name": "cccc"
		}
	],
	"resource": [{
		"resource_id": 1,
		"resource_name": "resource",
		"ad_type": "xxxxx",
		"size": "120x300"
	}],
	"types": [{
		"type_id": 1,
		"ad_type": "xxxxx",
		"size": "1200x300"
	}],
	"creative": [{
		"creative_id": 2,
		"name": "创意2",
		"ad_type": "aaaaa",
		"size": "120x40",
		"creative_weight": 190,
		"is_open": 1
	}]

}






// server.listen(9999);

// server.on('request', (request, response) => {
// 	console.log(require('url').parse(request.url));
// })