"use strict";
class UserBuilder {
    setName(name) {
        this.name = name;
        return this;
    }
    // it's important that object should differ for the guards to be able to work
    isAdmin() {
        return this instanceof AdminBuilder;
    }
}
class AdminBuilder extends UserBuilder {
}
const res1 = new UserBuilder().setName('User'); // UserBuilder
const res2 = new AdminBuilder().setName('Admin'); // AdminBuilder
let user1 = new UserBuilder();
if (user1.isAdmin()) {
    console.log('user admin');
}
else {
    console.log('user not admin');
}
