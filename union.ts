function logId(id: string | number | boolean) {
    // narrowing
    if (typeof id === 'string') {
        console.log('id',id.toLowerCase());
    } else {
        console.log(id);
    }
}

function logObject(obj: {a: number} | {b: number}) {
    if ('a' in obj) {
        console.log('a', obj.a);
    } else {
        console.log('b',obj.b)
    }
}


function logMultipleIds(a: string | number, b: string | number) {
    // narrowing
    if (a === b) {
        //
    } else {
        //
    }
}

let a: 1 = 1;

// error
// a = 2;