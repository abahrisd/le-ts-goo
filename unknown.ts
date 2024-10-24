let input: unknown;

input = 3;
input = [1, 2];
input = ['1', '2'];

// error
// let resultInput: string = input;

// no error with any
let resultInput: any = input;

function run(i: unknown) {
    if (typeof i === 'number') {
        i++; // number
    } else {
        i // unknown
    }
}

run(input);

async function getData() {
    try {
        await fetch('')
    } catch (error) { // error is unknown

        // error! is unknown
        // console.log(error.message);

        if (error instanceof SyntaxError) {
            console.log(error.message);
        }

        // worse that prev check, will fail if come diff type
        const e = error as Error;
        console.log(e.message);
    }
}

type u1 = unknown | number; // union type with unknown - is unknown

type i1 = unknown & string; // intersection with unknown - rest of types