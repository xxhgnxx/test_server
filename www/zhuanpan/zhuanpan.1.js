var roundwidth = $('.zhuanpan_box').width()
$('.zhuanpan_box').height(roundwidth)
var roundheight = $('.zhuanpan_box').height()

console.log('高：' + roundwidth + '  宽：' + roundwidth);

$('#myCanvas').attr("height", roundwidth)
$('#myCanvas').attr("width", roundwidth)
$('#myCanvas01').attr("height", roundwidth)
$('#myCanvas01').attr("width", roundwidth)
$('#myCanvas02').attr("height", roundwidth)
$('#myCanvas02').attr("width", roundwidth)
$('#myCanvas_select').attr("width", roundwidth)
$('#myCanvas_select').attr("height", roundwidth)

var r = roundwidth / 2
var color = ["#626262", "#787878", "rgba(0,0,0,0.5)", "#DCC722", "white", "#FF4350"];


var canvas = document.getElementById('myCanvas');
var canvas_select = document.getElementById('myCanvas_select');
var canvas_btn = document.getElementById('myCanvas01');
var canvas_ball = document.getElementById('myCanvas02');
var canvas03 = document.getElementById('myCanvas03');
var ctx = canvas.getContext('2d');
var ctx_select = canvas_select.getContext('2d');
var ctx_btn = canvas_btn.getContext('2d');

var ctx_ball = canvas_ball.getContext('2d');
var ctx3 = canvas03.getContext('2d');

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
// 初始化外围球
setball();
// 初始化奖品区
var startAngle = 0;
var endAngle = 0;
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


// 抽奖按钮        
var img = new Image()
img.src = "./btn_choujiang.png"
var img_R = r / 1.8
var img_xy = r - img_R / 2
ctx_btn.drawImage(img, img_xy, img_xy, img_R, img_R);







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
    // setball();

    ctx_select.clearRect(0, 0, r, r);
    startAngle = Math.PI * (n / 3 - 1 / 6);
    endAngle = startAngle + Math.PI * (1 / 3);
    ctx_select.save();
    ctx_select.beginPath();
    ctx_select.arc(r, r, r - r / 3 - r / 4 - r / 20, startAngle, endAngle, false);
    ctx_select.lineWidth = r / 1.2;
    ctx_select.strokeStyle = "rgba(0,0,0,0.5)";
    ctx_select.stroke();
    ctx_select.restore();


    n = (n == 5 ? 0 : n + 1);
    console.log(speed);

    if (speed >= (1000)) {
        console.log('end');
        return
    }
    // speed = speed*1.1
    change_select(set_speed())
}


// 外围小球
var ball_color_a = '#ffe531'
var ball_color_b = '#c5881f'
var ball_set = r - r / 8.5
var big_ball_r = r / 19
var small_ball_r = r / 24

function setball(color_big, color_small) {
console.log('setballs');
    var big_ball_c = color_big || ball_color_a
    var small_ball_c = color_small || ball_color_b
    for (var i = 0; i < 360; i += 20) {
        if (i % 40 == 0) {
             x = r + ball_set * Math.sin(Math.PI * (i / 180));
    y = r + ball_set * Math.cos(Math.PI * (i / 180));
    ctx.lineWidth = big_ball_r;
    ctx.beginPath();
    ctx.arc(x, y, big_ball_r / 2, 0, 2 * Math.PI);
    ctx.strokeStyle = ball_color_a;
    ctx.stroke();
        } else {
             x = r + ball_set * Math.sin(Math.PI * (i / 180));
    y = r + ball_set * Math.cos(Math.PI * (i / 180));
    ctx.lineWidth = small_ball_r;
    ctx.beginPath();
    ctx.arc(x, y, small_ball_r / 2, 0, 2 * Math.PI);
    ctx.strokeStyle = ball_color_b;
    ctx.stroke();
        }
    }
}

function makeball(ball_r, color) {
console.log('makeball');
    
    x = r + ball_set * Math.sin(Math.PI * (i / 180));
    y = r + ball_set * Math.cos(Math.PI * (i / 180));
    ctx_ball.lineWidth = ball_r;
    ctx_ball.beginPath();
    ctx_ball.arc(x, y, ball_r / 2, 0, 2 * Math.PI);
    ctx_ball.strokeStyle = color;
    ctx_ball.stroke();
}

