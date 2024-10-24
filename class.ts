class UserC {
    name: string;
    age: number;

    // overload, using when need 2-3 implementations of constructor
    constructor();
    constructor(name: string);
    constructor(age: number);
    constructor(nameOrAge?: string | number) {
        if (typeof nameOrAge === 'string') {
            this.name = nameOrAge;
        } else if (typeof nameOrAge === 'number') {
            this.age = nameOrAge;
        }
    }
}

const userClass = new UserC('Vasya');
console.log('userc',userClass);
userClass.name = 'Bob';
console.log('userc',userClass);

class Admin {
    // role: number; // error with strictPropertyInitialization
    role!: number; // no error
}

const adminClass = new Admin();

adminClass.role = 1;

