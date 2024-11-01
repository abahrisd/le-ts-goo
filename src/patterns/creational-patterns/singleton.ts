class MyMapSingleton {
    private static  instance: MyMapSingleton;
    map: Map<number, string> = new Map();

    private constructor() {
        if (this instanceof MyMapSingleton) {
            return this;
        }
    }

    clean() {
        this.map = new Map();
    }

    public static get (): MyMapSingleton {
        if (!MyMapSingleton.instance) {
            MyMapSingleton.instance = new MyMapSingleton();
        }

        return MyMapSingleton.instance;
    }
}

class Service1 {
    addMap(key: number, value: string) {
        const myMap = MyMapSingleton.get();
        myMap.map.set(key, value);
    }
}

class Service2 {
    getKeys(key: number) {
        const myMap = MyMapSingleton.get();
        console.log('el 1', myMap.map.get(key));
        myMap.clean();
        console.log('el 2', myMap.map.get(key));
    }
}

new Service1().addMap(1, 'Work!');
new Service2().getKeys(1);