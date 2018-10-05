(function() {
    "use strict";

    Array.prototype.removeDuplicatesWithES6 = function() {
        console.log("WithES6: ", Array.from(new Set(this)));
    }

    Array.prototype.removeDuplicatesWithPromise = function() {
        return new Promise((resolve, reject)=>{
            setTimeout(()=>{
                resolve(console.log("Promise: ", Array.from(new Set(this))));
            }, 1000);
        })
    }

    Array.prototype.removeDuplicatesWithAsyncWait = async function() {
        try {
            let promise = new Promise((resolve, reject) => {
                setTimeout(() => {
                    resolve(Array.from(new Set(this)));
                }, 1000);  
            });
            let result = await promise;
            console.log("AsyncWait: ", result);
        } catch (error) {
            console.log(error)
        }
    };

    Array.prototype.removeDuplicatesWithObservables = function() {
        const { from } = rxjs;
        const { map, filter } = rxjs.operators;

        let promise = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(Array.from(new Set(this)));
            }, 1000);  
        });
        from(promise).subscribe((x)=>console.log("Observables: ", x));
    }
    

})();