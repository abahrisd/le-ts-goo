class UserConst {
    constructor(public id: number, public name: string) {}
}

function getDataUC(id: number): UserConst {
    return new UserConst(id, 'Vasya');
}

type RT = ReturnType<typeof getDataUC>;
type RT2 = ReturnType<() => void>;
type RT3 = ReturnType<<T>() => T>;//unknown
type RT4 = ReturnType<<T extends string>() => T>;// string

type PT = Parameters<typeof getDataUC>;
type firstPT = PT[0];

type CP = ConstructorParameters<typeof UserConst>; //id, name
type IT = InstanceType<typeof UserConst>; //UserConst

