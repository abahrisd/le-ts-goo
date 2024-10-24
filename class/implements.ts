interface ILogger {
    log(...args): void;
    error(...args): void;
}

class Logger implements ILogger {
    log(...args: any[]): void {
        console.log('',...args);
    }
    error(...args: any[]): void {
        console.log('',...args);
    }

}

interface Payable {
    pay(paymentId: number): void;
    price?: number;
}

interface Deletable {
    delete(): void;
}

class UserImp implements Payable, Deletable {
    // type in class overlap type in interface
    pay(paymentId: number | string): void {
        //
    }

    delete(): void {
        //
    }
}

