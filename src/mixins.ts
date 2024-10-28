type Constructor = new (...args: any[]) => {};
type GConstructor<T =  {}> = new (...args: any[]) => T;

class List {
    constructor(public items: string[]) {
    }
}

class Accordion {
    isOpened: boolean = false;
}

type ListType = GConstructor<List>;
type AccordionType = GConstructor<Accordion>;

class ExtendedListClass extends List {
    first() {
        return this.items[0];
    }
}

function ExtendedList<TBase extends ListType & AccordionType>(Base: TBase) {
    return class ExtendedList extends Base {
        first() {
            return this.items[0];
        }
    }
}

class AccordionList {
    isOpened: boolean = false;
    constructor(public items: string[]) {
    }
}

// const list = ExtendedList(List);
const list = ExtendedList(AccordionList);
const resMix = new list(['f', 's']);
console.log('resMix f', resMix.first());