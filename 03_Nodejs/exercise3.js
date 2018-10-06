const EventEmitter = require('events');

class Gym extends EventEmitter {
    constructor() {
        super();
        setInterval(()=>{
            this.emit('go');
        }, 1000);
    }
}

var gym = new Gym();
gym.on('go', ()=> console.log("Athlete is working out"));