var list = [
    "活动1",
    "活动2",
    "活动3",
    "活动4",
    "活动5",
    "活动6",
    "活动7",
    "活动8",
]



var start = false
var int

function test() {
    if (start) {
        return
    }
    start = true

    n = parseInt(list.length * Math.random())
    console.log("test", n);

    int = setInterval(go, 50)
}

var n = 0
var times = 0

function go() {
    if (times >= 50) {
        clearInterval(int)
        start = false
        times = 0
        return
    }
    console.log("go");

    $('.result').text(list[n])
    if (n == list.length - 1) {
        n = 0
    } else {
        n++

    }
    times++
}