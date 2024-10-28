function generateError(message: string): never { // result of function never will be returned
    throw new Error(message);
}

// never come out of cycle
function dumpError(): never {
    while(true) {}
}

// never come back from recursion
function rec(): never {
    return rec()
}

const a1: void = undefined;

// unable to assign
// const b1: never = undefined;

type paymentAction = 'refund' | 'chekcout';

function processAction(action: paymentAction) {
    switch (action) {
        case 'refund':
            //
            break;
        case "chekcout":
            //
            break;
        default:
            // if we will add new type in paymentAction - we will get here error and TS will force us to handle new type in switch
            const _: never = action;
            throw new Error('no such action');
    }
}

function isString(x: string | number): boolean {
    if (typeof x === 'string') {
        return true;
    } else if (typeof x === 'number') {
        return false;
    }

    // allow to type return of function just boolean and not boolean | undefined
    generateError('handle error');
}