interface UserOpt {
    login: string;
    password?: string; // optional
    name: string | undefined; // same optional
}

function multiply(f: number, s?: number) {
    if (s === undefined) {
        return f*f;
    }

    return f*s;
}

interface UserPro {
    login: string;
    password?: {
        type: 'prim' | 'sec';
    }
}

function testPass(user: UserPro) {
    return user.password?.type; // optional chaining
}

function nulCoal(user: UserPro) {
    return user.password?.type ?? multiply( 2);
}
