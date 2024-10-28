class UserSet {
    _login: string;
    password: string;

    // getters n setters good for sync logic with may be some side effects
    set login(l: string | number) {
        this._login = 'user-l' + l;
    }

    get login() {
        return this._login;
    }

    // long async procedures not fit to be handled with get/set
    async setPassword(p: string) {
        // ...
    }

}

const userSet = new UserSet();
userSet.login = 'myLogin';
console.log('userSet',userSet);