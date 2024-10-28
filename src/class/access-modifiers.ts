class Vehicle {
    public make: string;
    private damages: string[]; // private modificators private only in TS, in JS we can get access to it
    private _model: string;
    protected run: number;
    #price: number; // true private field in JS

    set model(m: string) {
        this._model = m;
        this.#price = 100;
    }

    get model() {
        return this._model;
    }

    isPriceEqual(v: Vehicle) {
        return this.#price === v.#price;// can check equality, if accessing private field of same class
    }

    addDamage(damage: string) {
        this.damages.push(damage);
    }
}

class EuroTruck extends Vehicle {
    setDamages(damage: string) {
        // this._model - unreacable, private fields doesn't accessable in child class
    }

    setRun(km: number) {
        this.run = km/0.62; // reachable, coz protected, but not reachable from out of class

    }
}