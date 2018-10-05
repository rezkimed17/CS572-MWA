
Array.prototype.odd = function() {
    setTimeout(()=>{
        let arr = []
        this.forEach((x)=> {
            if (x%2 != 0) arr.push(x)
        })
        console.log(arr);
    }, 0)   
}

Array.prototype.even = function() {
    setTimeout(()=>{
        let arr = []
        this.forEach((x)=> {
            if (x%2 == 0) arr.push(x)
        })
        console.log(arr);
    }, 0)
}

console.log('start');
[1,2,3,4,5,6,7,8].even();
[1,2,3,4,5,6,7,8].odd();
console.log('end');