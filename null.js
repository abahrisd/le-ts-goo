"use strict";
const n1 = null;
const n2 = null;
function getUser() {
    if (Math.random() < 0.5) {
        return null; // conscious return of empty user
    }
    else {
        return {
            name: 'Vasya',
        };
    }
}
const userN = getUser();
if (userN) {
    const nameN = userN.name; // error w/o strictNullCheck, userN can be undefined
}
