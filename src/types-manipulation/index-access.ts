interface IRoleIA {
    name: string;
}

interface IPermission {
    endDate: Date;
}

interface IUserIA {
    name: string;
    roles: IRoleIA[];
    permission:  IPermission;
}

const userIa: IUserIA = {
    name: 'Vasya',
    roles: [],
    permission: {
        endDate: new Date(),
    },
}

const nameUser = user['name'];
const roleNames = 'roles';
// let roleNames: 'roles' = 'roles';

type roleType = IUserIA['roles'];
// type roleTypes2 = IUserIA[roleNames]; //error! object is not a type
type roleTypes3 = IUserIA[typeof roleNames]; //error! object is not a type

type roleType2 = IUserIA['roles'][number];
type dateType2 = IUserIA['permission']['endDate'];

const roles = ['admin', 'user', 'superuser'] as const; // as const create readonly object

type roleTypes = typeof roles[number]; // union type of array values