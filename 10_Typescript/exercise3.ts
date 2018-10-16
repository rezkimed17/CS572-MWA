class Person {
    private _firstName: string = "";
    get firstName() {
        return this._firstName;
    }
    set firstName(value) {
        this._firstName = value;
    }
}

let person = new Person();
person.firstName = "Mohammed";
console.log(person.firstName);