"use strict";
let d = 5;
let e = d.toString();
let f = new String(d).valueOf();
let g = 'sdfg';
let h = parseInt(g);
// const userC: <UserC> is equvalent of 'as UserC'
const userC = {
    name: 'name',
    email: 'email',
    login: 'login',
};
// bad, admin has email and login, type is wrong
const admin = Object.assign(Object.assign({}, userC), { role: 1 });
// fix it with mapping
function userToAdmin(user) {
    return {
        name: user.name,
        role: 1,
    };
}
