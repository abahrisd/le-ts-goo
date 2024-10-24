class PaymentT {
    private date: Date = new Date();

    // special this param to make accent on context
    getDate(this: PaymentT): Date {
        return this.date;
    }

    getDateArrow = () => {
        return this.date;
    }
}

const p = new PaymentT();

console.log('p.getDate',p.getDate());

const userT = {
    id: 1,
    paymentDate: p.getDate.bind(p),
    paymentDate2: p.getDateArrow,
};

console.log('p.getDate', p.getDate());
console.log('user.getDate', userT.paymentDate());
console.log('user.getDate', userT.paymentDate2());

class PaymentPersistent extends PaymentT {
    save() {
        return super.getDate()
    }

    save2() {
        // return super.getDateArrow(); // not work with arrow function, coz it's not class function as getDate
    }
}

console.log(new PaymentPersistent().save());