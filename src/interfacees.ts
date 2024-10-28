interface UserI {
    name: string,
    age: number,
    skills: string[],
    log: (id: number) => string;
}

interface UserWithRoleI extends UserI {
    roleId: number;
}


let user: UserWithRoleI = {
    name: 'name',
    age:  10,
    skills: [],
    roleId: 1,
    log(id) {
        return '';
    }
}

// Record
interface UserDictionaryI {
    [index: number]: UserI,
}

type UserDictionary = Record<number, string>;