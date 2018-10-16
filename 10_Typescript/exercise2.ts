class BaseObject {
    constructor(public width:number = 0, public length:number = 0) {}
}

class Rectangle extends BaseObject {
    constructor(){
        super();
        this.width = 5;
        this.length = 2;
    }
    calcSize(): number {
        return this.width * this.length;
    }
}

console.log(new Rectangle().calcSize());