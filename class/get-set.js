"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
class UserSet {
    // getters n setters good for sync logic with may be some side effects
    set login(l) {
        this._login = 'user-l' + l;
    }
    get login() {
        return this._login;
    }
    // long async procedures not fit to be handled with get/set
    setPassword(p) {
        return __awaiter(this, void 0, void 0, function* () {
            // ...
        });
    }
}
const userSet = new UserSet();
userSet.login = 'myLogin';
console.log('userSet', userSet);
