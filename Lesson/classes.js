/**
 * [] Objects
 * [] Object Constructors
 * [] Classes
 * 
 * Need to Know
 * 
 * :: Object contructor function
 *    - A Function that constructors an object from the blueprint we provide
 * 
 * :: Properties
 *    - A value that you can set and access on an object
 *    
 * :: Methods
 *    - A function that you can set and call on an object
 * 
 * :: Class
 *    - Keyword to used to create a class  
 * 
 * :: Extends
 *    - Keyword to select which class to build on top of or inherit from.
 * 
 * :: Super
 *    - Calls the constructor of the parent class or the class it's extending from
 */


// Objects

// let dog = {
//     name: 'Fluffy',
//     legs: 4,
// }
// let newDog = dog
// newDog.name = "Spike"
// newDog.legs = 3

// console.log('Dog1', dog)
// console.log('Dog2', newDog)


// Objection Constructors

// function Dog(name, color, breed){
//     this.name = name
//     this.color = color
//     this.breed = breed
// }
// let dog1 = new Dog("Cliffon", "red", "Big Dog")
// let dog2 = new Dog("Spot", "black and white", "Doberman")
// console.log(dog1)
// console.log(dog2)


// function Orders(items, price, delivery){
//     this.items = items
//     this.price = price
//     this.delivery = delivery
// }

// let order1 = new Orders(["Pizza", "Salad", "BreadStick"], 100, false)
// let order2 = new Orders("Pizza", 25, true)
// console.log(order1)
// console.log(order2)


// Class

// class Cookie {
//     constructor(flavor, size){
//         this.flavor = flavor
//         this.size = size
//         this.isCooked = false
//     }

//         isCooking(){
//             this.isCooked = true
//         }
//     }

// let lunchables = new Cookie("Sugar", "large")
// console.log(lunchables)
// lunchables.isCooking()
// console.log(lunchables);

// class Car{
//     constructor(color){
//         this.color = color
//         this.numberOfWheels = 4 
//         this.numberOfDoors = 4
//         this.isRunning = false
//     }

//     startEngine(){
//         this.isRunning = true
//     }
// }

// class Toyota extends Car{
//     constructor(color, techpackage){
//         // Super calls the constructor of the parent class
//         // or the class it extends from constructor function
//         super(color)
//         this.techpackage = techpackage
//     }
// }

// let myToyota = new Toyota('Black', 'Premium')
// console.log(myToyota);

// let mySecondToyota = new Toyota('Green', 'Premium')
// mySecondToyota.startEngine()
// console.log(mySecondToyota);