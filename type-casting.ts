let d = 5;
let e: string = d.toString();
let f: string = new String(d).valueOf();

let g = 'sdfg';
let h: number = parseInt(g);

interface UserC {
    name: string,
    email: string,
    login: string,
}

// const userC: <UserC> is equvalent of 'as UserC'
const userC: UserC = {
    name: 'name',
    email: 'email',
    login: 'login',
} as UserC


interface Admin {
    name: string,
    role: number,
}

// bad, admin has email and login, type is wrong
const admin: Admin = {
    ...userC,
    role: 1,
}

// fix it with mapping

function userToAdmin(user: UserC): Admin {
    return {
        name: user.name,
        role: 1,
    }
}