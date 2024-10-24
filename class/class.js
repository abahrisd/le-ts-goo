"use strict";
class UserC {
    constructor(nameOrAge) {
        if (typeof nameOrAge === 'string') {
            this.name = nameOrAge;
        }
        else if (typeof nameOrAge === 'number') {
            this.age = nameOrAge;
        }
    }
}
const userClass = new UserC('Vasya');
console.log('userc', userClass);
userClass.name = 'Bob';
console.log('userc', userClass);
class Admin {
}
const adminClass = new Admin();
adminClass.role = 1;
