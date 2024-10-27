const ag: Array<number> = [1, 2, 3]; // number - variable in generic type - Array<T>

async function tetsG() {
    const pg = new Promise<number>((res, rej) => {
        res(1);
    });
}

const checkg: Record<string, boolean> = {
    drive: true,
    kpp: false
}

// function logMiddleware(data: number | string): number | string {
function logMiddleware<T>(data: T): T {
    console.log('data',data);
    return data;
}

const resg = logMiddleware<number>(10);
const resg2 = logMiddleware<string>('string');

function getSplitedHalf<T>(data: T[]): T[] {
    const l = data.length/2;
    return data.splice(0, l);
}

getSplitedHalf<number>([1, 2, 3]);


//////////////////////////////

interface ILogLine<T> {
    timeStamp: Date;
    data: T;
}

const logLine: ILogLine<{a: number}> = {
    timeStamp: new Date(),
    data: {
        a: 1,
    }
};

/////////////////////////////

class VehicleG {
    run: number;
}

function kmToMiles<T extends VehicleG> (vehicle: T): T {
    vehicle.run = vehicle.run/0.62;
    return vehicle;
}

const vehicleG = kmToMiles(new VehicleG());

function logIdGen<T extends string | number, Y>(id: T, data: Y) {
    console.log('id', id);
    console.log('data', data);
    return id;
}
