type A = Awaited<Promise<string>>; // string
type A2 = Awaited<Promise<Promise<string>>>; // string!

interface IMenu {
    name: string;
    url: string;
}

async function getMenu(): Promise<IMenu[]> {
    return [
        {name: 'analysis', url: '/analysis'},
    ];
}

type R = Awaited<ReturnType<typeof getMenu>>;

async function getArray<T>(x: T): Promise<Awaited<T>[]> { // good
    return [await x]; // Promise<Awaited<T>>
}

async function getArray2<T>(x: T): Promise<T[]> { // bad
    return [await x];
}