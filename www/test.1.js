var tmp
function add(n) {
  return add2.bind(this,n) 

}

console.log('tmp',tmp);

function add2(n,m) {
    console.log('add2 tmp',tmp);
    

if (m) {
        tmp=n+m;
        // console.log(tmp);
        return add2.bind(this, tmp)
    } else {
        // return t
    }


}
add(1)(2)(3);
console.log('tmp after',tmp);
