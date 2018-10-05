
Array.prototype.odd = function() {
    setImmediate(()=>{
        let arr = []
        this.forEach((x)=> {
            if (x%2 != 0) arr.push(x)
        })
        console.log(arr);
    })   
}

Array.prototype.even = function() {
    setImmediate(()=>{
        let arr = []
        this.forEach((x)=> {
            if (x%2 == 0) arr.push(x)
        })
        console.log(arr);
    })
}

console.log('start');
[1,2,3,4,5,6,7,8].even();
[1,2,3,4,5,6,7,8].odd();
console.log('end');