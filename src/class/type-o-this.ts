class UserBuilder {
    name: string;

    setName(name: string): this {
        this.name = name;
        return this;
    }

    // it's important that object should differ for the guards to be able to work
    isAdmin(): this is AdminBuilder {
        return this instanceof AdminBuilder;
    }
}

class AdminBuilder extends UserBuilder {
    roles: string[];
}

const res1 = new UserBuilder().setName('User'); // UserBuilder
const res2 = new AdminBuilder().setName('Admin'); // AdminBuilder

let user1: UserBuilder  | AdminBuilder = new UserBuilder();

if (user1.isAdmin()) {
    console.log('user admin',)
} else {
    console.log('user not admin',)
}