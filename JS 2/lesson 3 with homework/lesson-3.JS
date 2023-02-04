class Car {
    constructor(name, color, Horsepower, model){
        this.name = name
        this.color = color
        this.Horsepower = Horsepower
        this.model = model
    }
}

const tesla = new Car('tesla', 'white', '1000', 'model-x' )
const bmw = new Car('bmw', 'black' , '600', 'm5-f90')

console.log(tesla);