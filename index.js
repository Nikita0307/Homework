'use strict'

class MenuItem {
    constructor(name, price, calories) {
      this.name = name;
      this.price = price;
      this.calories = calories;
    }
  }
  
  class Burger extends MenuItem {
    static SIZES = {
      small: { price: 50, calories: 20 },
      large: { price: 100, calories: 40 },
    };
    static STUFFINGS = {
      cheese: { price: 10, calories: 20 },
      salad: { price: 20, calories: 5 },
      potato: { price: 15, calories: 10 },
    };
  
    constructor(size, stuffing) {
      const { price: sizePrice, calories: sizeCalories } = Burger.SIZES[size];
      const { price: stuffingPrice, calories: stuffingCalories } =
        Burger.STUFFINGS[stuffing];
      super(`${size.charAt(0).toUpperCase()}${size.slice(1)} burger with ${stuffing}`, sizePrice + stuffingPrice, sizeCalories + stuffingCalories);
      this.size = size;
      this.stuffing = stuffing;
    }
  }
  
  class Salad extends MenuItem {
    static TYPES = {
      caesar: { price: 100, calories: 20 },
      olivier: { price: 50, calories: 80 },
    };
  
    constructor(type, weight) {
      const { price, calories } = Salad.TYPES[type];
      super(`${type.charAt(0).toUpperCase()}${type.slice(1)} salad`, price * (weight / 100), calories * (weight / 100));
      this.type = type;
      this.weight = weight;
    }
  }
  
  class Drink extends MenuItem {
    static TYPES = {
      cola: { price: 50, calories: 40 },
      coffee: { price: 80, calories: 20 },
    };
  
    constructor(type) {
      const { price, calories } = Drink.TYPES[type];
      super(type, price, calories);
      this.type = type;
    }
  }
  
  class Order {
    constructor() {
      this.items = [];
      this.paid = false;
    }
  
    addItem(item) {
      if (!this.paid) {
        this.items.push(item);
      }
    }
  
    removeItem(item) {
      if (!this.paid) {
        const index = this.items.indexOf(item);
        this.items.splice(index, 1);
      }
    }
  
    getTotalPrice() {
      return this.items.reduce((total, item) => total + item.price, 0);
    }
  
    getTotalCalories() {
      return this.items.reduce((total, item) => total + item.calories, 0);
    }
  
    pay() {
      this.paid = true;
    }
  }
  
  const burger1 = new Burger('small', 'cheese');
  const burger2 = new Burger('large', 'potato');
  const salad = new Salad('olivier', 150);
  const drink = new Drink('coffee');
  
  const order = new Order();
  
  order.addItem(burger1);
  order.addItem(burger2);
  order.addItem(salad);
  order.addItem(drink);
  
  console.log('Total price:', order.getTotalPrice()); 
  console.log('Total calories:', order.getTotalCalories()); 
  
  order.removeItem(drink);
  
  console.log('Total price:', order.getTotalPrice());
  console.log('Total calories:', order.getTotalCalories());
  
  order.pay();
  
  order.addItem(salad);
  order.removeItem(burger1);
  
  console.log('Total price:', order.getTotalPrice()); 
  console.log('Total calories:', order.getTotalCalories());