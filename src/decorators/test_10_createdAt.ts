
interface IUserServiceWC {
    users: number;
    getUsersFromDB(): number;
}

@createdAt
class UserServiceWC implements IUserServiceWC {
    users: number = 100;

    getUsersFromDB(): number {
        return this.users;
    }
}

function createdAt<T extends {new(...args: any[]) : {}}>(constructor: T) {
    return class extends constructor {
        createdAt = new Date();
    }
}

type CreatedAt = {
    createdAt: Date;
}

console.log((new UserServiceWC() as IUserServiceWC & CreatedAt).createdAt); // didn't see decorated props without casting