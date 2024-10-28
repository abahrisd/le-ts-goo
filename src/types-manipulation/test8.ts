interface IGroup<T> {
    [key: string]: T[];
}

type key = string | number | symbol;

function groupByKey<T extends Record<key, any>>(arr: T[], key: keyof T): IGroup<T> {
    return arr.reduce<IGroup<T>>((acc: IGroup<T>, curr: T) => {
        const itemKey = curr[key];

        if (!Array.isArray(acc[itemKey])) {
            acc[itemKey] = [];
        }

        acc[curr[key]].push(curr);

        return acc;
    }, {});
}

const arr2group = [
    { group: 1, name: 'a' },
    { group: 1, name: 'b' },
    { group: 2, name: 'c' },
];

const groupedObj = groupByKey(arr2group, 'group');
console.log('groupedObj', groupedObj);