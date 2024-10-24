"use strict";
/*
Необходимо сделать корзину (Cart) на сайте,
    которая имееет список продуктов (Product), добавленных в корзину
и переметры доставки (Delivery). Для Cart реализовать методы:
    - Добавить продукт в корзину
- Удалить продукт из корзины по ID
- Посчитать стоимость товаров в корзине
- Задать доставку
- Checkout - вернуть что всё ок, если есть продукты и параметры доставки
Product: id, название и цена
Delivery: может быть как до дома (дата и адрес) или до пункта выдачи (дата = Сегодня и Id магазина)
*/
class Product {
    constructor(id, name, price) {
        this.id = id;
        this.name = name;
        this.price = price;
    }
}
class Delivery {
    constructor(date) { }
}
class DeliveryHome extends Delivery {
    constructor(date, address) {
        super(date);
        this.address = address;
    }
}
class DeliveryPickUp extends Delivery {
    constructor(pickUpPointId) {
        super(new Date());
    }
}
class Cart {
    constructor() {
        this.products = [];
    }
    addProduct(product) {
        this.products.push(product);
    }
    removeProduct(productId) {
        this.products = this.products.filter(product => product.id !== productId); // or splice
    }
    calculatePrice() {
        return this.products.reduce((acc, val) => acc + val.price, 0);
    }
    setDelivery(delivery) {
        this.delivery = delivery;
    }
    checkout() {
        if (!this.delivery) {
            throw Error('No delivery found!');
        }
        if (this.products.length <= 0) {
            throw Error('No products found!');
        }
        return { success: true };
    }
}
const cart = new Cart();
cart.addProduct(new Product(1, 'Cookie', 10));
cart.addProduct(new Product(2, 'Cake', 30));
cart.addProduct(new Product(3, 'Chocolate', 20));
cart.removeProduct(1);
// cart.setDelivery(new DeliveryHome(new Date, 'home address'));
console.log('sum', cart.calculatePrice());
console.log(cart.checkout());
