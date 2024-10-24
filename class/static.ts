class UserService {
    // static props lost on instances
    private static db: any;
    static async getUser(id: number) {
        return this.db.findById(id);
    }

    constructor(id: number) {

    }

    create() {
        return UserService.db // static props accesible in nonstatic methods after instantiating
    }

    // static block of class, kind a constructor of our statics
    static {
        // no async in static block
        UserService.db = 'ref';
    }
}

// there is no static classes in typescript, because in JS we can create function outside of class

UserService.getUser(1);
const inst = new UserService(1);
inst.create();