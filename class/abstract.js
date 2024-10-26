"use strict";
class Controller {
    handleWithLogs(req) {
        console.log('start');
        this.handle(req);
        console.log('end');
    }
}
// error, unable to instantiate abstract class
// new Controller()
class UserController extends Controller {
    // should be implemented, coz of abstract class
    handle(req) {
        console.log('req', req);
    }
}
// no error
const uc = new UserController();
uc.handleWithLogs('req');
