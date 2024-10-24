"use strict";
function logIdG(id) {
    // if (typeof id === "number") {
    if (isString1(id)) {
        console.log('id', id);
    }
    else {
        console.log('id2', id);
    }
}
function isString1(x) {
    return typeof x === 'string';
}
function isAdmin(user) {
    return 'role' in user;
}
function isAdminAlternative(user) {
    return user.role !== undefined;
}
function setRole(user) {
    if (isAdmin(user)) {
        user.role = 0;
    }
    else {
        throw new Error('user is not Admin');
    }
}
