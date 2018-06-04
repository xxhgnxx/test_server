const https = require('https');
var url = 'https://www.dianping.com/shop/91958327'



// const https = require('https');


var http = require('http');
// var url = "http://www.ss.pku.edu.cn/index.php/newscenter/news/2391";
//初始url 

function fetchPage(x) { //封装了一层函数
  startRequest(x);
}

var options = {
  url: url,
  headers: {
    'User-Agent': 'Mozilla/5.0 (iPhone; CPU iPhone OS 10_3_3 like Mac OS X) AppleWebKit/603.3.8 (KHTML, like Gecko) Mobile/14G60 MicroMessenger/6.5.16 NetType/WIFI Language/zh_CN'
  }
};

var options = {
  hostname: 'www.dianping.com',
  path: '/shop/9111958327',
  method: 'get',
  headers: {
    //'Content-Type':'application/x-www-form-urlencoded',  
    'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
    'User-Agent': 'Mozilla/5.0 (iPhone; CPU iPhone OS 10_3_3 like Mac OS X) AppleWebKit/603.3.8 (KHTML, like Gecko) Mobile/14G60 MicroMessenger/6.5.16 NetType/WIFI Language/zh_CN'
  }
}

function startRequest(x) {
  //采用http模块向服务器发起一次get请求     
  https.get(options, function (res) {
    var html = ''; //用来存储请求网页的整个html内容
    var titles = [];
    res.setEncoding('utf-8'); //防止中文乱码
    //监听data事件，每次取一块数据

    console.log(res.statusCode);
    res.on('data', function (chunk) {
      html += chunk;
    });
    //监听end事件，如果整个网页内容的html都获取完毕，就执行回调函数
    res.on('end', function () {

      console.log(2222);
      console.log(html);

    })

  }).on('error', function (err) {
    console.log(err);
  });

}


fetchPage(url);