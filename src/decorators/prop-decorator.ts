interface IUserServiceProp {
    users: number;
    getUsersInDatabase(): number;
}

class UserServiceProp implements IUserServiceProp {
    @Max(100)
    users: number;

    getUsersInDatabase(): number {
        return this.users;
    }
}

function Max(max: number) {
    return (
        target: Object,
        propertyKey: string | symbol,
    ) => {
        let value: number;
        const setter = function (newValue: number) {
            if (newValue > max) {
                console.log(`Unable to set value more than ${max}`,)
            } else {
                value = newValue;
            }
        }

        const getter = function () {
            return value;
        }

        Object.defineProperty(target, propertyKey, {
            set: setter,
            get: getter,
        })
    }
}

const userServiceProp = new UserServiceProp();
userServiceProp.users = 1;
console.log('userServiceProp.users',userServiceProp.users);
userServiceProp.users = 1000;
console.log('userServiceProp.users',userServiceProp.users);