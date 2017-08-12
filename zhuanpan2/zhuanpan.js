var img = document.getElementById('zhuanpan_select');
var time=0
function roll() {
    console.log("11");
    // img.style.transform = "rotate(90deg)";
    img.style.transform = "rotate("+deg_list[time]+")";
    if (time<=5) {
        time++
    }else{
   time=0
    }
}

deg_list=[ '0deg','60deg','120deg','180deg','240deg','300deg']