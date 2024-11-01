const A = {
    a: 1,
}

export {
    A,
}

export interface Export {
    a: number;
}

const ExportConst = 1;

export default ExportConst;

export type MyType = string | number;

// export default type MyType = string | number; // unable to export default type or interface