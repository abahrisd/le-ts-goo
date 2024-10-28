function logId(id: string | number) {
    console.log(id);
}

const logedId = logId('a'); // type = void

// we can set type number | void
function multi(f: number, s?: number) {
    if (!s) {
        return f*f;
    }
}

const multied = multi(2, 3); // number | undefined;

type voidFunc = () => void;

const f1: voidFunc = () => {

}

const f2: voidFunc = () => {
    return true;
}

const b = f2(); // type of b is void

// void tell function that it can return whatever she wants - it will be ignored