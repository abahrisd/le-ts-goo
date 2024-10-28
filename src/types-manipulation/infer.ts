function runTransaction(transaction: {fromTo: [string, string]}) {
    console.log('trans',)
}

const transaction: GetFirstArg<typeof runTransaction> = {
    // fromTo: ['1', '2'] as [string, string],
    fromTo: ['1', '2'],
}
runTransaction(transaction);

type GetFirstArg<T> = T extends (first: infer First, ...args) => any ? First : never;