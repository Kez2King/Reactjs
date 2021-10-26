/**
 * Create a Restaurant Class
 * 
 * Should track:
 * 
 *     - An order
 *          + Items
 *          + Total Cost
 * 
 *     - A Menu
 *          + Items
 *              * item Name
 *              * price
 *     - Ability to create orders
 *     - Ability to add items to an order
 */

class Restaurant{
    constructor(order, menu){
        this.order = order
        this.menu = menu
    }
}

class newOrder extends Restaurant{
    constructor(order, menu, items){
        super(order) = []
        super(menu) = {
            name: "Pizza",
            price: 12
        }, {
            name: "Salad",
            price: 10
        }
        this.items = items
    }
    newOrder(){
        
    }
}

class addItems extends Restaurant{
    constructor(menu, itemName, price){
        super(menu)
        this.itemName = itemName
        this.price = price
    }

}

// let myRestaurant = new Restaurant()
// let myOrder = new order()
// console.log(myRestaurant)
