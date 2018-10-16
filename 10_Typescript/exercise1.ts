class Car {
    constructor(public name: string, public acceleration: number = 0) {}
    honk():void{
        console.log(`${this.name} is saying Tooooot!`);
    }
    accelerate(speed):void{
        this.acceleration += speed;
    }
}

let car = new Car("BMW");
car.honk();
console.log(car.acceleration);
car.accelerate(60);
console.log(car.acceleration);