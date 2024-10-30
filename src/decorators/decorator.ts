interface IUserService {
    users: number;
    getUsersInDatabase(): number;
}
// decorators initialise from top to down, but run from down to top

// @nullUsers
// @threeUsersAdvanced
// @setUsers(2)
@setUsersAdvanced(2)
@log()
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

function setUsers(number: number) {
    console.log('setUsers init',)
    return (target: Function) => {
        console.log('setUsers run',)
        target.prototype.users = number;
    }
}

function threeUsersAdvanced<T extends {new(...args: any[]) : {}}>(constructor: T) {
    return class extends constructor {
        users = 3;
    }
}

function setUsersAdvanced(number: number) {
    return <T extends {new(...args: any[]) : {}}>(constructor: T) => {
        return class extends constructor {
            users = number;
        }
    }
}

function log() {
    console.log('Log init',)
    return (target: Function) => {
        console.log('Log run',target);
    }
}


console.log(new UserServiceDec().getUsersInDatabase());