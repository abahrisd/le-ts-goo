interface IUserTM {
    name: string;
    age: number;
}

type KeysOfUer = keyof IUserTM;

const key: KeysOfUer = 'age';

function getValue<T, K extends keyof T>(obj: T, key: K) {
    return obj[key];
}

const userTM: IUserTM = {
    name: 'Vasya',
    age: 30,
}

const userName = getValue(userTM, 'name');
