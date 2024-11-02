class KVDatabase {
    private db: Map<string, string> = new Map();

    save (key: string, value: any) {
        this.db.set(key, value);
    }
}

function runA(base: KVDatabase) {
    base.save('key', 'value');
}

class PersistentDB extends KVDatabase {

    savePersistent(_: Object) {

    }
}

class PersistentDBAdapter extends KVDatabase {
    constructor(public database: PersistentDB) {
        super();
    }

    override save (key: string, value: any) {
        this.database.savePersistent({key, value});
    }
}

runA(new PersistentDBAdapter(new PersistentDB()));