
const dns = require('dns');
const { from } = require('rxjs');

function convert_domain_adress_simple(domain) {
    dns.resolve4(domain, (error, address)=> console.log("simple: \t", address));
}

function convert_domain_adress_promise(domain) {
    dns.resolve4(domain, (error, address)=> {
        new Promise((resolve, reject) => resolve(console.log("promise:\t", address)))
    });
}

function convert_domain_adress_async_await(domain) {
    dns.resolve4(domain, async function(error, address) {
            let promise  = new Promise((resolve, reject) => resolve(address));
            let result  = await promise;
            console.log("async await:\t", result);
        }
    );
}

function convert_domain_adress_observable(domain) {
    dns.resolve4(domain, (error, address) => {
            let promise  = new Promise((resolve, reject) => resolve(address));
            from(promise).subscribe((x) => console.log("observable: \t", x))
        }
    );
}

convert_domain_adress_simple("www.mum.edu");
convert_domain_adress_promise("www.mum.edu");
convert_domain_adress_async_await("www.mum.edu");
convert_domain_adress_observable("www.mum.edu");


