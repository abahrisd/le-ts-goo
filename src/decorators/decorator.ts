interface IUserService {
    users: number;
    getUsersInDatabase(): number;
}

// @nullUsers
@threeUsersAdvanced
class UserServiceDec implements IUserService {
    users: number;

    getUsersInDatabase(): number {
        return this.users;
    }
}

// this type of decorators not working after params was initialised
function nullUsers(target: Function) {
    target.prototype.users = 0;
}

function threeUsersAdvanced<T extends {new(...args: any[]) : {}}>(constructor: T) {
    return class extends constructor {
        users = 3;
    }
}

console.log(new UserServiceDec().getUsersInDatabase());