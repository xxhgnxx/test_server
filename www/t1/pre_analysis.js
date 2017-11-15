var checkVersion = function() {
  window.browers = {};
  var ua = navigator.userAgent.toLowerCase();
  var app_ua;
  var version;
  browers.Android = ua.match(/android/);
  browers.iOS = ua.match(/ipad|iphone|ios/),
    app_ua = ua.match(/newsapp\/([\d\.]+)/i);
  if (app_ua) {
    v = app_ua[1].replace(eval('/\\./ig'), '');
    version = parseInt(v);
    if (v.length >= 2) {
      version = version * 10;
    }
  }
  if ((browers.iOS && version < 382) || (browers.Android && version < 710)) {
    document.getElementById('odd').style.display = 'none';
    document.getElementById('odd_list').style.display = 'none';
  }

}();

function sildeIncrement(vote_box,value){
  this.vote_box = $(vote_box);
  this.locked_value = value.count_val;
  this.real_value = value.val;
  this.name = value.name;
  this.speed = 3;
  this.init = 0;
  this.over_height = 52;
  this.silde = function(){
    if(this.real_value === 0){
      return;
    }
    var that = this;
    var $bar = this.vote_box.find('.progress');
    this.vote_box.find('p span').text(this.name);
    this.init += 1;

    $bar.css('height', this.over_height*this.init/100+20 + 'px');
    $bar.css('line-height', $bar.height()+'px');
    if(this.init <= this.real_value){
      this.vote_box.find('bold').text(this.real_value+'%');
    }
    if (this.init === this.locked_value) {
      return;
    }
    setTimeout(function(){that.silde()}, this.speed);
  }
}
function vote_down(arr) {
  $('#forecast').hide();
  var new_arr=[];
  arr.forEach(function (i) {new_arr.push(i.num)});
  var count_num = eval(new_arr.join("+"));
  var max = Math.max.apply(null,new_arr);
  arr.forEach(function (j) {
    if(j.num == 0){
      j.val = 0;
    }else{
      j.val = Math.round(j.num/count_num*100);
    }
    if(j.num == max){
      j.count_val = 100;
    }else{
      j.count_val = Math.floor(j.num/max*100);
    }
  });
  arr[1].val = 100 - arr[0].val - arr[2].val;
  var progress = document.querySelectorAll('ul.vote_con .vote_view');
  for(var i=0;i<progress.length;i++){
    new sildeIncrement(progress[i],arr[i]).silde()
  }
}

// 锦囊相关
var isloading=false;
function cancel_set_way() {
  if (!isloading) {
    set_way('off')
  }
 
}
function set_way(e) {
  console.log(e);
  var target= $('.pay_way_box')
  var target2= $('.pay_way_back')
  if (e=='on') {
    target.removeClass('hide');
    target2.removeClass('hide');
    setTimeout(function() {
      target.addClass('show');
      target2.addClass('show');
    }, 0);
  }
  if (e=='off') {
    target.removeClass('show');
    target2.removeClass('show');
    setTimeout(function() {
      target.addClass('hide');
      target2.addClass('hide');
    }, 500);
  }
  console.log('set_way');
}
function show_paying_box(e) {
  console.log(e);
  var target= $('#paying_box')
  if (e=='on') {
    target.removeClass('hide');
    setTimeout(function() {
      target.addClass('show');
    }, 0);
  }
  if (e=='off') {
    target.removeClass('show');
    setTimeout(function() {
      target.addClass('hide');
    }, 500);
  }
  console.log('set_way');
}
function show_problem_box(e) {
  console.log(e);
  var target= $('#problem_box')
  if (e=='on') {
    target.removeClass('hide');
    setTimeout(function() {
      target.addClass('show');
    }, 0);
  }
  if (e=='off') {
    target.removeClass('show');
    setTimeout(function() {
      target.addClass('hide');
    }, 500);
  }
  console.log('set_way');
}


function loading_show(e){
var loading_box=$('.loading_icon_box')
  if (e=='on') {
    loading_box.removeClass('hide');
    isloading=true;
  }
  if (e=='off') {
    loading_box.addClass('hide');
    isloading=false;
  }
}

function gopay(){
  loading_show('on')
  var target= $('.pay_way_box')
  if(target.hasClass("show")){
    target.toggleClass('show');
    setTimeout(function() {
      target.toggleClass('hide');
    }, 500);
  }else{
    target.toggleClass('hide');
    setTimeout(function() {
      target.toggleClass('show');
    }, 0);
  }
  show_paying_box('on')
  console.log('gopay');

}

//停止支付
function end_pay() {
  show_paying_box('off')
  // loading_show('off')
  // set_way('off')
  setTimeout(function() {
  show_problem_box('on')
  }, 500);
}
//停止支付
function cancel_pay( ) {
  show_paying_box('off')
  loading_show('off')

}


function select(target){
  $('.kind_list span').removeClass('sel')
$(target).find("span").addClass('sel')
console.log($(target).attr("id"));
}

// 唤醒支付订单
function pay_money(params) {
  $.get(getHostName() + "recharge/app?app_id=").then(function (res) {

    if (res.data.code == 0) {
      this.getdataScu(res.data);
    } else {
      Vue.set(this, "propmt", true);
      Vue.set(this, "err_msg", res.data.message);
    }
  }, err => {
    this.getdataErr();
  });

  
}


function getHostName() {
  var domian = {
    'localhost': 'https://test1-lott-pay.dongqiudi.com/',
    '10.18.7.30': '/'
  }
  return domian[location.hostname] ? domian[location.hostname] : "";
}


// 联系客服
function onlineService () {
  if (window.browers.Android && window.version != 128) {
    location.href = "dongqiudi:///online_server";
    return;
  }
  let _url = location.origin + "/webapp/footerball_lottery.html#/";
  location.href = "dongqiudi:///online_server?channel=lottery&id=zucai&groupId=kf_10015_1505874792611&title=足彩充值&url=" + _url;
}