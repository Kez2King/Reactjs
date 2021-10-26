/**
 *  Create a Car class that has properties of a car
 *  Should have at least 1 method
 *  Create a CarBrand class
 *      - Build atop the car class
 *      - Gives specifics about that brand
 */


class Car{
    constructor(color){
        this.color = color
        this.numberOfWheels = 4
        this.numberOfDoors = 4

    }
}
class CarBrand extends Car{
    constructor(color, removeableDoors){
        super(color)
        this.numberOfDoors = 2
        this.removeableDoors = false
    }
    removeDoors(){
        this.removeableDoors = true
    }
}

let myCar = new Car("Black")
console.log(myCar)

let mySecondCar = new CarBrand("Green")
console.log(mySecondCar)

mySecondJeep.removeDoors()
console.log(mySecondCar)