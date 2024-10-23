"use strict";
function logId(id) {
    console.log(id);
}
const logedId = logId('a'); // type = void
// we can set type number | void
function multi(f, s) {
    if (!s) {
        return f * f;
    }
}
const multied = multi(2, 3); // number | undefined;
const f1 = () => {
};
const f2 = () => {
    return true;
};
const b = f2(); // type of b is void
// void tell function that it can return whatever she wants - it will be ignored
