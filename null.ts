const n1: null = null;
const n2: any = null;

// error w/o strictNullCheck: false
// const n3: number = null;
// const n4: string = null;
// const n5: boolean = null;
// const n5: undefined = null;

interface UserN {
    name: string;
}

function getUser() {
    if (Math.random() < 0.5) {
        return null; // conscious return of empty user
    } else {
        return {
            name: 'Vasya',
        } as UserN;
    }
}

const userN = getUser();
if (userN) {
    const nameN = userN.name; // error w/o strictNullCheck, userN can be undefined
}
