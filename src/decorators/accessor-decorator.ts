interface IUserServiceA {
    users: number;
    getUsersInDatabase(): number;
}

class UserServiceA implements IUserServiceA {
    private _users: number;

    @LogAccessor()
    set users(num: number) {
        this._users = num;
    }

    get users() {
        return this._users;
    }

    getUsersInDatabase(): number {
        return this.users;
    }
}

// work on both accessors
function LogAccessor() {
    return (
        target: Object,
        propertyKey: string | symbol,
        descriptor: PropertyDescriptor,
    ) => {
        const set = descriptor.set;
        descriptor.set = (...args: any) => {
            console.log('args',args);
            set?.apply(target, args);
        }
    }
}

const userServiceA = new UserServiceA();
userServiceA.users = 1;