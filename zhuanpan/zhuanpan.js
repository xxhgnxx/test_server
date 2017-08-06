var roundwidth = $('.zhuanpan_box').width()
$('.zhuanpan_box').height(roundwidth)
var roundheight = $('.zhuanpan_box').height()

console.log('高：' + roundwidth + '  宽：' + roundwidth);

$('#myCanvas').attr("height", roundwidth)
$('#myCanvas').attr("width", roundwidth)
//外环
$('#canvas_select').attr("height", roundwidth)
$('#canvas_select').attr("width", roundwidth)
$('#canvas_btn').attr("height", roundwidth)
$('#canvas_btn').attr("width", roundwidth)
$('#canvas_ball').attr("height", roundwidth)
$('#canvas_ball').attr("width", roundwidth)
$('#canvas_text').attr("width", roundwidth)
$('#canvas_text').attr("height", roundwidth)

var r = roundwidth / 2

var ball_set = r - r / 8.5;
var big_ball_r = r / 19;
var color_a = '#ffe531';
var small_ball_r = r / 24;
var color_b = '#c5881f';

var info = ['超级杯专属足球', '豪门足球游戏礼包', '谢谢参与', '超级杯专属足球', '豪门足球游戏礼包', '谢谢参与']


var canvas = document.getElementById('myCanvas');
var canvas_select = document.getElementById('myCanvas_select');
var canvas_btn = document.getElementById('canvas_btn');
var canvas_ball = document.getElementById('canvas_ball');
var canvas_text = document.getElementById('canvas_text');
var ctx = canvas.getContext('2d');
var ctx_select = canvas_select.getContext('2d');
var ctx_btn = canvas_btn.getContext('2d');

var ctx_ball = canvas_ball.getContext('2d');
var ctx_text = canvas_text.getContext('2d');

// 初始化外边框
ctx.lineWidth = r / 20;
ctx.beginPath();
var grd = ctx.createLinearGradient(0, 0, 0, r);
grd.addColorStop(0, "#bfb06f");
grd.addColorStop(0.5, "#635433");
grd.addColorStop(1, "#454635");
ctx.strokeStyle = grd;
ctx.arc(r, r, r - r / 40, 0, 2 * Math.PI);
ctx.stroke();
// 初始化外环
ctx.lineWidth = r / 4;
ctx.beginPath();
var grd = ctx.createLinearGradient(0, 0, 0, r);
grd.addColorStop(0, "#282e34");
grd.addColorStop(1, "#1a242d");
ctx.strokeStyle = grd;
ctx.arc(r, r, r - r / 40 - r / 8, 0, 2 * Math.PI);
ctx.stroke();
// 初始化外环花纹 球
setballs()



// 初始化 奖品区
var startAngle = 0;
var endAngle = 0;
//画一个8等份扇形组成的圆形
ctx.lineWidth = r / 1.2;
for (var i = 0; i < 6; i++) {
    startAngle = Math.PI * (i / 3 - 1 / 6);
    endAngle = startAngle + Math.PI * (1 / 3);
    ctx.save();
    ctx.beginPath();
    ctx.arc(r, r, r - r / 3 - r / 4 - r / 20, startAngle, endAngle, );
    if (i % 2 == 0) {
        ctx.strokeStyle = '#5d7a43';
    } else {
        ctx.strokeStyle = '#69884c';
    }



    ctx.stroke();
    ctx.restore();
}
// 初始化 奖品区文字图片
// 异步加载图片文件
var load_end = 0;

var img_ball = new Image()
img_ball.src = "./ball.png"
img_ball.onload = function () {
    load_end++;
    init_text();
};
var img_star = new Image()
img_star.src = "./star.png"
img_star.onload = function () {
    load_end++;
    init_text();
};
var img_thx = new Image()
img_thx.src = "./thx.png"
img_thx.onload = function () {
    load_end++;
    init_text();
};
var img_ball_text = new Image()
img_ball_text.src = "./ball_text.png"
img_ball_text.onload = function () {
    load_end++;
    init_text();
};
var img_game_code = new Image()
img_game_code.src = "./game_code.png"
img_game_code.onload = function () {
    load_end++;
    init_text();
};
// 图片
function init_text() {
    if (load_end >= 5) {
        var img_width = r / 4.3
        var img_set = r / 2.5

        var img_x = (r + img_set * Math.sin(Math.PI * (30 / 180))) - img_width / 2;
        var img_y = (r + img_set * Math.cos(Math.PI * (30 / 180))) - img_width / 2;
        ctx_text.drawImage(img_ball, img_x, img_y, img_width, img_width);

        var img_x = (r + img_set * Math.sin(Math.PI * (210 / 180)) - img_width / 2);
        var img_y = (r + img_set * Math.cos(Math.PI * (210 / 180))) - img_width / 2;
        ctx_text.drawImage(img_ball, img_x, img_y, img_width, img_width);

        img_width = r / 2.4
        img_set = r / 2.5
        var img_x = (r + img_set * Math.sin(Math.PI * (150 / 180)) - img_width / 2);
        var img_y = (r + img_set * Math.cos(Math.PI * (150 / 180))) - img_width / 2;
        ctx_text.drawImage(img_star, img_x, img_y, img_width, img_width);

        var img_x = (r + img_set * Math.sin(Math.PI * (330 / 180)) - img_width / 2);
        var img_y = (r + img_set * Math.cos(Math.PI * (330 / 180))) - img_width / 2;
        ctx_text.drawImage(img_star, img_x, img_y, img_width, img_width);
        // 文字
        var text_width = r / 5.6
        var test_set = r / 1.58
        var img_R = r / 1.8

        ctx_text.translate(r, r);
        ctx_text.drawImage(img_thx, 0 + (r / 1.9 - text_width), 0 - text_width / 2, text_width * 2, text_width);
        ctx_text.drawImage(img_thx, 0 - (r / 1.9 + text_width), 0 - text_width / 2, text_width * 2, text_width);

        ctx_text.rotate(-1 * (2 * Math.PI / 6) + (2 * Math.PI / 12));
        ctx_text.drawImage(img_ball_text, 0 - text_width, -test_set - text_width / 2, text_width * 2, text_width);
        ctx_text.drawImage(img_ball_text, 0 - text_width, test_set - text_width / 2, text_width * 2, text_width);

        ctx_text.rotate((2 * Math.PI / 6));
        ctx_text.drawImage(img_game_code, 0 - text_width, -test_set - text_width / 2, text_width * 2, text_width);
        ctx_text.drawImage(img_game_code, 0 - text_width, test_set - text_width / 2, text_width * 2, text_width);
    }
}





// 抽奖按钮        
var img = new Image()
img.src = "./btn_choujiang.png"
img.onload = function () {
    var img_R = r / 1.9;
    var img_xy = r - img_R / 2;
    ctx_btn.drawImage(img, img_xy, img_xy, img_R, img_R);
}







// 抽奖动画
var n = 0
var end = parseInt(Math.random() * (7 - 0 + 0) + 0)
var speed = 62
var times = 24

function roll(n = parseInt(Math.random() * (7 - 0 + 0) + 0)) {
    end = n
    speed = 62
    change_select(30)
}

function change_select(speed) {
    // if (speed <= (2000 + n * 20)) {
    setTimeout(change_canvas, speed);
    // }
}

function set_speed() {
    if (speed > 30 && times == 24) {
        speed -= 4;
    } else {
        if (times > 0) {
            times--
        } else {
            if (speed < 1500) {
                speed += 50
            }
        }
    }
    return speed
}

function change_canvas() {


    ctx_select.clearRect(0, 0, roundwidth, roundwidth);
    startAngle = Math.PI * (n / 3 - 1 / 6);
    endAngle = startAngle + Math.PI * (1 / 3);
    ctx_select.save();
    ctx_select.beginPath();
    ctx_select.arc(r, r, r - r / 3 - r / 4 - r / 20, startAngle, endAngle, false);
    ctx_select.lineWidth = r / 1.2;
    ctx_select.strokeStyle = "rgba(200,200,100,0.7)";
    ctx_select.stroke();
    ctx_select.restore();


    n = (n == 5 ? 0 : n + 1);
    console.log(speed);

    if (speed >= (1000)) {
        console.log('end');
        return
    }
    change_select(set_speed())
}


function setballs(big, small) {
    ctx_ball.clearRect(0, 0, roundwidth, roundwidth);
    var small_c = big || color_a;
    var big_c = small || color_b;
    for (var i = 0; i < 360; i += 20) {

        if (i % 40 == 0) {
            makeball(small_ball_r, small_c, i)
        } else {
            makeball(big_ball_r, big_c, i)
        }
    }
}




function makeball(ball_r, color, i) {
    x = r + ball_set * Math.sin(Math.PI * (i / 180));
    y = r + ball_set * Math.cos(Math.PI * (i / 180));
    ctx_ball.lineWidth = ball_r;
    ctx_ball.beginPath();
    ctx_ball.arc(x, y, ball_r / 2, 0, 2 * Math.PI);
    ctx_ball.strokeStyle = color;
    ctx_ball.stroke();
}

var change_step = false
setInterval(function () {
    if (change_step) {
        setballs(color_b, color_a)
    } else {
        setballs()
    }
    change_step = !change_step;

}, 800)