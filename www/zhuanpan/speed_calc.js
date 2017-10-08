function roll(a, b, c, d, e) {
    console.log('roll');
    var start_time = new Date().getTime()
    // 跳动一格 距离单位
    var step = 1

    // 加速到最高速时用的时间
    var time_speed_up = a || 4000
    // 最高速  持续时间
    var time_max_speed = b || 4000
    // 减速到最低速时用的时间
    var time_speed_down = c || 4000
    // 最高速  跳动n格/s
    var max_speed = d || step * 4
    // 最低速
    var end_speed = e || step * 0.6
    // 转动间隔时间，计算得出
    var step_sleep = 0
    // 初速度 当前速度，计算得出 
    var v_now = 0

    function let_s_go() {
        var time_now=new Date().getTime()- start_time
        do_sth();
if ( time_now <=time_speed_up) {
    console.log('加速',step_sleep);
    v_now = v_now + time_now * (max_speed / time_speed_up)
    step_sleep = step / v_now
}
if ( time_now >=time_speed_up&&time_now >=time_speed_up+time_max_speed) {
    console.log('匀速运行中',step_sleep);
    step_sleep = step / v_now
}
if ( time_now <=time_speed_up && v_now>end_speed ) {
    console.log('减速',step_sleep);
    v_now = v_now - time_now-(time_speed_up+time_max_speed) * (time_max_speed / time_speed_up)
    step_sleep = step / v_now
}

    setTimeout(let_s_go, step_sleep);
    }
    
let_s_go()

}

function do_sth() {
    console.log('do');
}