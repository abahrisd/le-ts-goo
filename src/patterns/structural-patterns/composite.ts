abstract class DeliveryItem {
    items: DeliveryItem[] = [];

    addItem(item: DeliveryItem) {
        this.items.push(item);
    }

    getItemPrices(): number {
        return this.items.reduce((acc: number, i: DeliveryItem) => acc += i.getPrice(), 0);
    }

    abstract getPrice(): number;
}


export class DeliveryShop extends DeliveryItem {
    constructor(public deliveryFee: number) {
        super();
    }

    getPrice(): number {
        return this.getItemPrices() + this.deliveryFee;
    }
}

class Package extends DeliveryItem {
    getPrice() {
        return this.getItemPrices();
    }
}

class Product extends DeliveryItem {
    constructor(private price: number) {
        super();
    }

    getPrice(): number {
        return this.price;
    }
}

const shop = new DeliveryShop(100);
shop.addItem(new Product(1000));
const pack1 = new Package();
pack1.addItem(new Product(10));
pack1.addItem(new Product(11));
pack1.addItem(new Product(12));
shop.addItem(pack1);

const pack2 = new Package();
pack2.addItem(new Product(8));
pack2.addItem(new Product(17));
shop.addItem(pack2);

console.log(shop.getPrice())

