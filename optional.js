"use strict";
function multiply(f, s) {
    if (s === undefined) {
        return f * f;
    }
    return f * s;
}
function testPass(user) {
    var _a;
    return (_a = user.password) === null || _a === void 0 ? void 0 : _a.type; // optional chaining
}
function nulCoal(user) {
    var _a, _b;
    return (_b = (_a = user.password) === null || _a === void 0 ? void 0 : _a.type) !== null && _b !== void 0 ? _b : multiply(2);
}
