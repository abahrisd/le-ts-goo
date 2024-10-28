type ReadOWright = 'read' | 'write';
type Bulk = 'bulk' | '';

type Access = `can${Uppercase<ReadOWright>}${Capitalize<Bulk>}`;

type ReadOWrightBulk<T> = T extends `can${infer R}` ? R : never;

type T = ReadOWrightBulk<Access>;

type ErrorOrSuccess = 'error' | 'success';

type ResponseT = {
    result: `http${Capitalize<ErrorOrSuccess>}`
}

const resp1: ResponseT = {
    result: "httpSuccess",
}
