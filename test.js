var list = [];
list.push({
    "name": "D"
})
list.push({
    "name": "C"
})
list.push({
    "name": "B"
})
list.push({
    "name": "A"
})
console.log(list);
list.sort((a, b) => {
    if (a.name > b.name) {
        return 1;
    }
})
console.log(list);


numberList = 1234223432344234
outStrint="";
for (var i = 0;i+4<= numberList.toString().length; i+=4) {
    outStrint=outStrint+numberList.toString().slice(i, i + 4)+" "
}
console.log(outStrint);
// console.log(numberList.toString().slice(0,4));

// console.log(numberList.toString());
numberList = "1234223432344234"
var tmp=numberList.map((chr, idx) => (idx + 1) % 4 ? chr : chr + ' ').join('');
console.log(tmp);
console.log(tmp);
console.log(!!(9 % 4));