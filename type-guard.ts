
function logIdG(id: string | number) {
    // if (typeof id === "number") {
    if (isString(id)) {
        console.log('id',id)
    } else {
        console.log('id2',id);
    }
}

function isString(x: string | number): x is string {
    return typeof x === 'string';
}

function isAdmin(user: UserN | Admin): user is Admin {
    return 'role' in user;
}

function isAdminAlternative(user: UserN | Admin): user is Admin {
    return (user as Admin).role !== undefined;
}

function setRole(user: UserN | Admin) {
    if (isAdmin(user)) {
        user.role = 0;
    } else {
        throw new Error('user is not Admin');
    }
}