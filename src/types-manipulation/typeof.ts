let strOrNumber: string | number;

if (Math.random() < 0.5) {
    strOrNumber = 5;
} else {
    strOrNumber = 'asd';
}

if (typeof strOrNumber === 'number') {
    console.log('strOrNumber',strOrNumber); // number
} else {
    console.log('strOrNumber',strOrNumber); // string
}

let str2OrNumbe: typeof strOrNumber;

const userTy = {
    name: 'Vasya',
};

type keyOrUserTy = keyof typeof userTy; //!!!

enum Direction {
    up,
    down,
}

type Dir = keyof typeof Direction; // 'up' | 'down'
