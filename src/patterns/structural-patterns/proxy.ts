interface IPaymentAPI {
    getPaymentDetail(id: number): IPaymentDetail | undefined;
}

interface IPaymentDetail {
    id: number;
    sum: number;
}

class PaymentAPI implements IPaymentAPI {
    private data = [{id: 1, sum: 10000}];

    getPaymentDetail(id: number): IPaymentDetail | undefined {
        return this.data.find(d => d.id === id);
    }

}

class PaymentAPIProxy implements IPaymentAPI {
    constructor(private api: PaymentAPI, private userId: number) {

    }

    getPaymentDetail(id: number): IPaymentDetail | undefined {
        if (this.userId === 1) {
            return this.api.getPaymentDetail(id);
        }
        console.log('Error!',)
        return;
    }
}

const proxy1 = new PaymentAPIProxy(new PaymentAPI(), 1);
console.log('proxy1',proxy1.getPaymentDetail(1));

const proxy2 = new PaymentAPIProxy(new PaymentAPI(), 2);
console.log('proxy2',proxy2.getPaymentDetail(2));