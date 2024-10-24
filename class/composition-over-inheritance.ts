class UserComp {
    name: string;

    constructor(name: string) {
        this.name = name;
    }
}

// Inheritance. Business logic mixed with application logic, bad
class Users extends Array<UserComp> {
    searchByName(name: string) {
        return this.filter(u => u.name === name)
    }

    override toString(): string {
        return this.map(u => u.name).join(', ');
    }
}

// Composition, good
class UsersList {
    users: UserComp[];

    push(u: UserComp) {
        this.users.push(u);
    }
}

class PaymentComp {
    date: Date;
}

// mix two domains - User and Payment, bad
class UserWithPayment extends PaymentComp {
    name: string;
}

// Composition, good
class UerWithPayment2 {
    user: UserComp;
    payment: PaymentComp;

    constructor(user: UserComp, payment: PaymentComp) {
        this.user = user;
        this.payment = payment;
    }

}

/*
* Where to use inheritance:
* - When we acting in same domain
* Other casses - composition
* */