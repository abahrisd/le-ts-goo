"use strict";
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _Vehicle_price;
class Vehicle {
    constructor() {
        _Vehicle_price.set(this, void 0); // true private field in JS
    }
    set model(m) {
        this._model = m;
        __classPrivateFieldSet(this, _Vehicle_price, 100, "f");
    }
    get model() {
        return this._model;
    }
    isPriceEqual(v) {
        return __classPrivateFieldGet(this, _Vehicle_price, "f") === __classPrivateFieldGet(v, _Vehicle_price, "f"); // can check equality, if accessing private field of same class
    }
    addDamage(damage) {
        this.damages.push(damage);
    }
}
_Vehicle_price = new WeakMap();
class EuroTruck extends Vehicle {
    setDamages(damage) {
        // this._model - unreacable, private fields doesn't accessable in child class
    }
    setRun(km) {
        this.run = km / 0.62; // reachable, coz protected, but not reachable from out of class
    }
}
