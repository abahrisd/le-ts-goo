function toString<T>(obj: T): string | undefined {
    if (Array.isArray(obj)) {
        return obj.toString();
    }

    switch (typeof obj) {
        case 'string':
            return obj;
        case 'number':
        case 'symbol':
        case 'bigint':
        case 'boolean':
        case 'function':
            return obj.toString();
        case 'object':
            return JSON.stringify(obj);
        default:
            return undefined;
    }
}