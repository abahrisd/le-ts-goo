function Uniq(name: string): any {
    console.log(`init ${name}`,)

    return function () {
        console.log(`Call ${name}`,)
    }
}
@Uniq('class')
class MyKlass {
    @Uniq('prop')
    props?: any;

    @Uniq('static prop')
    static prop2?: any;

    @Uniq('method')
    method(@Uniq('param') _: any) {

    }

    @Uniq('static method')
    static method2(@Uniq('static param') _: any) {

    }

    constructor(@Uniq('constructor param') _: any) {

    }
}

/*
init prop
Call prop
init method
init param
Call param
Call method
init static prop
Call static prop
init static method
init static param
Call static param
Call static method
init class
init constructor param
Call constructor param
Call class
* */