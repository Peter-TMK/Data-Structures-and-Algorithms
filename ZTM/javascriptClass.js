// reference types

var object1 = { value: 10};
var object2 = object1;
var object3 = { value: 10};

// console.log(object2 === object1)
// console.log(object2 === object3)

// context vs scope
// instantiation

class Country {
    constructor(name, population){
        // console.log(this)
        this.name = name;
        this.population = population;
    }
    food(){
        console.log(this.name, this.population)
    }
}

class State extends Country {
    constructor(name, population){
        super(name, population)
        console.log(this)
    }
    color(){
        console.log(this.population)
    }
}

const country = new State("Nigeria", "200M+")
country.food()
country.color()
