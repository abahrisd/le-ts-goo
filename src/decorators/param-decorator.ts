import 'reflect-metadata';

interface IUserServicePar {
    setUsersInDatabase(num1: number, num2?: number): void;
    getUsersInDatabase(): number;
}

const POSITIVE_METADATA_KEY = Symbol();

class UserServicePar implements IUserServicePar {
    private _users: number;

    getUsersInDatabase(): number {
        return this._users;
    }

    @Validate()
    setUsersInDatabase(
        @Positive() num1: number,
        num2?: number,
    ): void {
        this._users = num1;
    }
}

// work on both accessors
function Positive() {
    return (
        target: Object,
        propertyKey: string | symbol,
        parameterIndex: number,
    ) => {
        console.log('index', parameterIndex);
        console.log(Reflect.getOwnMetadata('design:type', target, propertyKey));
        console.log(Reflect.getOwnMetadata('design:paramtypes', target, propertyKey));
        console.log(Reflect.getOwnMetadata('design:returntype', target, propertyKey));

        let existParams: number[] = Reflect.getOwnMetadata(POSITIVE_METADATA_KEY, target, propertyKey) || [];
        existParams.push(parameterIndex);
        Reflect.defineMetadata(POSITIVE_METADATA_KEY, existParams,  target, propertyKey);
    }
}


function Validate() {
    return (
        target: Object,
        propertyKey: string | symbol,
        descriptor: TypedPropertyDescriptor<(...args: any[]) => any>,
    ) => {
        let method = descriptor.value;

        descriptor.value = (...args: any[]) => {
            let positiveParams: number[] = Reflect.getOwnMetadata(POSITIVE_METADATA_KEY, target, propertyKey);

            if (positiveParams) {
                for (let index of positiveParams) {
                    if (args[index] < 0) {
                        throw new Error('Number should be more than zero');
                    }
                }
            }
        }
    }
}

const userServicePar = new UserServicePar();
userServicePar.setUsersInDatabase(10);
userServicePar.setUsersInDatabase(-1);