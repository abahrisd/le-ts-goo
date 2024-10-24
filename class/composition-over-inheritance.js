"use strict";
class UserComp {
    constructor(name) {
        this.name = name;
    }
}
// Inheritance. Business logic mixed with application logic, bad
class Users extends Array {
    searchByName(name) {
        return this.filter(u => u.name === name);
    }
    toString() {
        return this.map(u => u.name).join(', ');
    }
}
// Composition, good
class UsersList {
    push(u) {
        this.users.push(u);
    }
}
class PaymentComp {
}
// mix two domains - User and Payment, bad
class UserWithPayment extends PaymentComp {
}
// Composition, good
class UerWithPayment2 {
    constructor(user, payment) {
        this.user = user;
        this.payment = payment;
    }
}
/*
* Where to use inheritance:
* - When we acting in same domain
* Other casses - composition
* */ 
