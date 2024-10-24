"use strict";
function logIdNarrow(id) {
    // narrowing
    if (typeof id === 'string') {
        console.log('id', id.toLowerCase());
    }
    else {
        console.log(id);
    }
}
function logObject(obj) {
    if ('a' in obj) {
        console.log('a', obj.a);
    }
    else {
        console.log('b', obj.b);
    }
}
function logMultipleIds(a, b) {
    // narrowing
    if (a === b) {
        //
    }
    else {
        //
    }
}
let a = 1;
// error
// a = 2;
