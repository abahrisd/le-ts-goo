"use strict";
function generateError(message) {
    throw new Error(message);
}
// never come out of cycle
function dumpError() {
    while (true) { }
}
// never come back from recursion
function rec() {
    return rec();
}
const a1 = undefined;
function processAction(action) {
    switch (action) {
        case 'refund':
            //
            break;
        case "chekcout":
            //
            break;
        default:
            // if we will add new type in paymentAction - we will get here error and TS will force us to handle new type in switch
            const _ = action;
            throw new Error('no such action');
    }
}
function isString(x) {
    if (typeof x === 'string') {
        return true;
    }
    else if (typeof x === 'number') {
        return false;
    }
    // allow to type return of function just boolean and not boolean | undefined
    generateError('handle error');
}
