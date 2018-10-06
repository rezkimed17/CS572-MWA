const os = require('os');
const { Observable } = require('rxjs');

function checkSystem() {
    console.log('Checking your system ...');
    let valid_config = true;
    if( os.freemem() < 4294967296) {
        console.log('This app needs at least 4 GB of RAM');
        valid_config = false;
    }
    if(os.cpus().length < 2) {
        console.log('Processor is not supported');
        valid_config = false;
    }
    if(valid_config) {
        console.log('System is checked successfully.');
    }
}

function checkSystemWithObservable() {
    console.log('Checking your system ...');
    Observable.create( observer => {
        let valid_config = true;
        if( os.freemem() < 4294967296 ) {
            observer.next('This app needs at least 4 GB of RAM');
            valid_config = false;
        }
        if( os.cpus().length < 2 ) {
            observer.next('Processor is not supported');
            valid_config = false;
        }
        if(valid_config) {
            observer.next('System is checked successfully.');
        }
        observer.complete();
    }).subscribe(status => console.log(status) );

}

checkSystem();
console.log('--------------------------------');
checkSystemWithObservable();

