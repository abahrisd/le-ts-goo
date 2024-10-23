interface UserMerge {
    name: string;
}
interface UserMerge {
    age: number;
}

const userM: UserMerge = {
    name: 'name',
    age: 1,
}

type UserMergeT = {
    name: string;
}
// erorr
// type UserMerge = {
//     age: number;
// }

type id = string | number;

// error
// interface IdI extends string, number {
//
// }