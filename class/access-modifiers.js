"use strict";
var _Vehicle_price;
class Vehicle {
    constructor() {
        _Vehicle_price.set(this, void 0); // true private field in JS
    }
    set model(m) {
        this._model = m;
    }
    get model() {
        return this._model;
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
