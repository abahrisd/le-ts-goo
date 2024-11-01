interface Prototype<T> {
    clone(): T;
}

class UserHistory implements Prototype<UserHistory> {
    createdAt: Date;

    constructor(
        public email: string,
        public name: string,
    ) {
        this.createdAt = new Date();
    }

    clone(): UserHistory {
        let target = new UserHistory(this.email, this.name);
        target.createdAt = this.createdAt;
        return target;
    }
}

let userHis = new UserHistory('2@2.sd', 'Vasya');
console.log('userHis', userHis);
const userHis2 = userHis.clone();
console.log('userHis2',userHis2);