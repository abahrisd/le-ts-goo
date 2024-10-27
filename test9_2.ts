interface IWithId {
    id: number;
}

function sortById<T extends IWithId>(ids: T[], type?: 'asc' | 'desc'): T[] {
    return [...ids].sort(({id: aId}, {id: bId}) => type === 'asc' ? (aId - bId) : (bId - aId));
}

const sortA = [
    {id: 1},
    {id: 3},
    {id: 2},
    {id: 8},
    {id: 7},
];

const aortAsc = sortById(sortA, 'asc');
const aortDesc = sortById(sortA);

console.log('aortAsc',aortAsc);
console.log('aortDesc',aortDesc);