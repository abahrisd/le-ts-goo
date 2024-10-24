type PaymentStatusE = 'new' | 'paid';

class PaymentE {
    id: number;
    status: PaymentStatusE = 'new';

    constructor(id: number) {
        this.id = id;
    }

    pay() {
        this.status = 'paid';
    }
}

class PersistentPayment extends PaymentE {
    databaseId: number;
    payedAt: Date;

    constructor() {
        const id = Math.random();
        super(id);
    }

    save() {
        // save to db
    }

    // to prevent accidental deletion method from base class
    override pay(date?: Date) {
        super.pay();

        if (date) {
            this.payedAt = date;
        }
    }
}

/*
* Call order - props initialised, then call constructor, then prps of child class, then his constructor etc.
* super always first string, except cases when we didn't call class props
* */


