var isHomeTeamAttack = false;
var isAttack = false;
var teamType = ["home","guest"];


var init = function(mid){
$(".liveBox div").stop(true,true,true);
$("#ballIn_"+mid).fadeOut();
$("#cornerBall_"+mid).fadeOut();
$("#lineBall_"+mid).fadeOut();
$("#pointBall_"+mid).fadeOut();
$("#star_"+mid).fadeOut();
$("#autoBall_"+mid).fadeOut();
$("#DAutoBall_"+mid).fadeOut();
$("#foul_"+mid).fadeOut();
$("#default_"+mid).fadeOut();
$("#msg_"+mid).fadeOut();
$("#shotIn_"+mid).fadeOut();
$("#stopIt_"+mid).fadeOut();
$("#shotOut_"+mid).fadeOut();
$("#shotLost_"+mid).fadeOut();

$("#DBall_"+mid).fadeOut();
$("#offside_"+mid).fadeOut();
//if(!isAttack){
//	$("#homeEventBox_"+mid).animate({width:"0px"})
//	$("#guestEventBox_"+mid).animate({width:"0px"})
//}
if(isHomeTeamAttack||!isAttack){
	$("#guestEventBox_"+mid).fadeOut();
}
if(!isHomeTeamAttack||!isAttack){
	$("#homeEventBox_"+mid).fadeOut(); 
}
isHomeTeamAttack = false;
isAttack = false;
};

function getTeamName(mid,type){
	return $("#team"+(type+1)+"_"+mid).text();
}
var resetTeamPostion = function(mid,eventBox,type,num,index){
	eventBox.fadeIn();
	if(type=="0"){
		eventBox.find(".team").animate({right:num});
	}else{
		eventBox.find(".team").animate({left:num});
	}
	var ctrlBG = $("#"+teamType[type]+"CtrlBG_"+mid);
	var attackBG = $("#"+teamType[type]+"AttackBG_"+mid);
	var DAttackBG = $("#"+teamType[type]+"DAttackBG_"+mid);
	if(index==0){
		eventBox.find(".ball").text("控球");
		attackBG.hide();
		DAttackBG.hide();
		ctrlBG.fadeIn();
	}else if(index==1){
		eventBox.find(".ball").text("进攻");
		ctrlBG.hide();
		DAttackBG.hide();
		attackBG.fadeIn();
	}else if(index==2){
		eventBox.find(".ball").text("危险进攻");
		ctrlBG.hide();
		attackBG.hide();
		DAttackBG.fadeIn();
	}
}

var ctrl = function(mid,type){
isHomeTeamAttack = (type=="0");
isAttack = true;
init(mid);
var eventBox = $("#"+teamType[type]+"EventBox_"+mid);
eventBox.animate({width:'40%'},300);
resetTeamPostion(mid,eventBox,type,"5px",0);

};



var attack = function(mid,type){
isHomeTeamAttack = (type=="0");
isAttack = true;
init(mid);
var eventBox = $("#"+teamType[type]+"EventBox_"+mid);
eventBox.animate({width:'65%'},300);
resetTeamPostion(mid,eventBox,type,"28px",1);

};



var dangerousAttack = function(mid,type){
isHomeTeamAttack = (type=="0");
isAttack = true;
init(mid);
var eventBox = $("#"+teamType[type]+"EventBox_"+mid);
eventBox.animate({width:'85%'},300);
resetTeamPostion(mid,eventBox,type,"28px",2);

};



var ballIn = function(mid,type,homeScore,guestScore){
init(mid);
//var eventBox = $("#"+teamType[type]+"EventBox_"+mid);
//eventBox.css("width","0px");
var ballInObj = $("#ballIn_"+mid);
ballInObj.attr("class","ballIn_"+type);
if(type='0')//主队进球
{
	ballInObj.html('<span class="home on">'+homeScore+'</span> - <span class="guest">'+guestScore+'</span>');
}else{
	ballInObj.html('<span class="home">'+homeScore+'</span> - <span class="guest on">'+guestScore+'</span>');
}
ballInObj.show();
};

var foul = function(mid,cradType,type){
init(mid);
//var eventBox = $("#"+teamType[type]+"EventBox_"+mid);
//eventBox.css("width","0px");
var foulObj = $("#foul_"+mid);
if(cradType=='red')//主队进球
{
	foulObj.html(' <span class="redCard">'+getTeamName(mid,type)+'</span>');
}else{
	foulObj.html(' <span class="yellowCard">'+getTeamName(mid,type)+'</span>');
}
foulObj.fadeIn();
};


var DBall = function(mid,type){
init(mid);
var autoBallObj = $("#DBall_"+mid);
autoBallObj.attr("class","DBall_"+type);
autoBallObj.find(".teamName").text(getTeamName(mid,type));
autoBallObj.fadeIn();
};


var autoBall = function(mid,type){
init(mid);
var autoBallObj = $("#autoBall_"+mid);
autoBallObj.attr("class","autoBall_"+type);
autoBallObj.find(".teamName").text(getTeamName(mid,type));
autoBallObj.fadeIn();
};
var DAutoBall = function(mid,type){
init(mid);
var autoBallObj = $("#DAutoBall_"+mid);
autoBallObj.attr("class","DAutoBall_"+type);
autoBallObj.find(".teamName").text(getTeamName(mid,type));
autoBallObj.fadeIn();
};


var offside = function(mid,type){
init(mid);
var autoBallObj = $("#offside_"+mid);
autoBallObj.attr("class","offside_"+type);
autoBallObj.find(".teamName").text(getTeamName(mid,type));
autoBallObj.fadeIn();
};


var cornerBall = function(mid,direction,type){//direction   0,1,2,3  左上,右上,右下,左下
init(mid);
var cornerBallObj = $("#cornerBall_"+mid);
cornerBallObj.attr("class","cornerBall_"+direction);
cornerBallObj.find(".teamName").text(getTeamName(mid,type));
cornerBallObj.fadeIn();
};


var lineBall = function(mid,postionID,type){//postionID = 0,1,2,3  分别代表位置级别
init(mid);
var lineBallObj = $("#lineBall_"+mid);
var top_up = (type==1&&postionID==0)?2:type;
lineBallObj.attr("class","lineBall_"+top_up);
var p = postionID!=0?postionID-1:postionID;
var dir = type==0?"left":"right";
var del = type!=0?"left":"right";
lineBallObj.css(del,"auto");
lineBallObj.css(dir,(64+p*44)+"px");
lineBallObj.find(".teamName").text(getTeamName(mid,type));
lineBallObj.fadeIn();
};


var star = function(mid,type){
init(mid);
var starObj = $("#star_"+mid);
starObj.find(".teamName").text(getTeamName(mid,type));
starObj.fadeIn();
};
var defaultInfo = function(mid){
init(mid);
var defaultObj = $("#default_"+mid);
defaultObj.fadeIn();
};
var showMsg = function(mid,str){
init(mid);
var defaultObj = $("#msg_"+mid);
defaultObj.html(str);
defaultObj.fadeIn();
};


var shotIn = function(mid,type){
init(mid);
var defaultObj = $("#shotIn_"+mid);
defaultObj.find(".teamName").text(getTeamName(mid,type));
defaultObj.fadeIn();
};

var stopIt = function(mid,type){
init(mid);
var defaultObj = $("#stopIt_"+mid);
defaultObj.find(".teamName").text(getTeamName(mid,type));
defaultObj.fadeIn();
};

var shotOut = function(mid,type){
init(mid);
var defaultObj = $("#shotOut_"+mid);
defaultObj.find(".teamName").text(getTeamName(mid,type));
defaultObj.fadeIn();
};

var shotLost = function(mid,type){
init(mid);
var defaultObj = $("#shotLost_"+mid);
defaultObj.find(".teamName").text(getTeamName(mid,type));
defaultObj.fadeIn();
};


var showMsg = function(mid,str){
init(mid);
var defaultObj = $("#msg_"+mid);
defaultObj.html(str);
var h  = defaultObj.height();
defaultObj.css("margin-top",0-h/2+"px");
defaultObj.fadeIn();
};

var showPointBallMsg = function(mid,str){

var defaultObj = $("#msg_"+mid);
defaultObj.html(str);
var h  = defaultObj.height();
defaultObj.css("margin-top",0-h/2+"px");
defaultObj.fadeIn();
};


var pointBall = function(mid,type){
init(mid);
var pointBall = $("#pointBall_"+mid);
pointBall.attr("class","pointBall_"+type);
pointBall.find(".teamName").text(getTeamName(mid,type));
pointBall.fadeIn();

};


var pointBallIn = function(mid,type,homeScore,guestScore){
var ballInObj = $("#ballIn_"+mid);
if(type='0')//主队进球
{
	ballInObj.html('<span class="home on">'+homeScore+'</span> - <span class="guest">'+guestScore+'</span>');
}else{
	ballInObj.html('<span class="home">'+homeScore+'</span> - <span class="guest on">'+guestScore+'</span>');
}
ballInObj.show();
};

