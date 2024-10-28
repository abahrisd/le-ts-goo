const aCon: number = Math.random() > 0.5 ? 1 : 0;

interface IHTTPResponse<T extends 'success' | 'failed'> {
    code: number;
    data: T extends 'success' ? string : Error;
    // additionalData: T extends 'success' ? string : number;
}

const success: IHTTPResponse<'success'> = {
    code: 200,
    data: 'string',
}

const error: IHTTPResponse<'failed'> = {
    code: 200,
    data: new Error('error'),
}

class UserCT {
    id: number;
    name: string;
}

class UserPersistentCT {
    dbid: string;
}

function getUserCT(id: number): UserCT;
function getUserCT(dbid: string): UserPersistentCT;
function getUserCT(dbidOrId: string | number): UserCT | UserPersistentCT {
    if (typeof dbidOrId === 'number') {
        return new UserCT();
    } else {
        return new UserPersistentCT();
    }
}

type UserOrUserPersistent<T extends string | number> = T extends number ? UserCT : UserPersistentCT;

function getUserCT2<T extends string | number>(id: T): UserOrUserPersistent<T> {
    if (typeof id === 'number') {
        return new UserCT() as UserOrUserPersistent<T>;
    } else {
        return new UserPersistentCT() as UserOrUserPersistent<T>;
    }
}

