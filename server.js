var fs=require('fs');
var express = require('express'),
	app = express(),
	server = require('http').createServer(app);

function setup_res(req,res,res_date){
	console.log("收到请求",req.method,req._parsedUrl.pathname,req.query);
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "X-Requested-With");
	res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
	res.header("X-Powered-By", ' 3.2.1')
	res.header("Content-Type", "application/json;charset=utf-8");
		res.writeHead(200, {
		"Content-Type": "application/json"
	});
	setTimeout(() => {
		res.end(res_date);
	}, 50)
}


app.get('/login', (req, res) => {
	fs.readFile('res/login.ok.json',(err,data)=>{
		setup_res(req,res,data)
	})
});
app.get('/get_list', (req, res) => {
	fs.readFile('res/list.json',(err,data)=>{
		setup_res(req,res,data)
	})
});
app.get('/activity/quiz/temp/redpacket', (req, res) => {
	fs.readFile('res/ok.json',(err,data)=>{
		setup_res(req,res,data)
	})
});
app.post('/activity/quiz/temp/redpacket/send', (req, res) => {
	fs.readFile('res/ok.json',(err,data)=>{
		setup_res(req,res,data)
	})
});
app.post('/activity/quiz/temp/submit', (req, res) => {
	fs.readFile('res/submit_ok.json',(err,data)=>{
		setup_res(req,res,data)
	})
	// var data = JSON.stringify({
	// 	code: 0,
	// 	message: "成功",
	// 	id: "xxxxx",
	// });
	// 	setup_res(req,res,data)
});
app.get('/activity/quiz/temp/lists', (req, res) => {
	fs.readFile('res/list.json',(err,data)=>{
		setup_res(req,res,data)
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
		setup_res(req,res,data)
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






server.listen(9999);

// server.on('request', (request, response) => {
// 	console.log(require('url').parse(request.url));
// })